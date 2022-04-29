import urllib.request
import json

import magic
import ffmpeg
from fastapi import FastAPI, UploadFile
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

from settings import speechkit_config
from models import StatusResponse

FOLDER_ID = speechkit_config["FOLDER_ID"]
API_KEY = speechkit_config["API_KEY"]

params = "&".join(["topic=general", "folderId=%s" % FOLDER_ID, "lang=ru-RU"])

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

audio = None
with open("healthcheck.ogg", "rb") as f:
    audio = f.read()


@app.get("/")
async def root():
    return {"message": "Memento ML Backend API v0.1"}


MOOD_LIST = ["negative", "neutral", "positive"]


@app.get("/healthcheck", response_model=StatusResponse)
async def health_check():
    status = "UNAVAILABLE"
    try:
        url = urllib.request.Request(
            "https://stt.api.cloud.yandex.net/speech/v1/stt:recognize?%s" % params,
            audio,
        )
        url.add_header("Authorization", "Api-Key %s" % API_KEY)
        response_data = urllib.request.urlopen(url).read().decode("UTF-8")
        decoded_data = json.loads(response_data)
        if len(decoded_data["result"]) > 0:
            status = "OK"
    finally:
        return StatusResponse(status=status)


@app.post("/stt_sync/")
async def convert_stt_sync(file: UploadFile):
    """Convert speech-to-text using synchronous recognition from SpeechKit API"""
    if not file or not file.filename.strip():
        return {"message": "No file sent"}

    data = await file.read()
    file_ext = magic.from_buffer(data, mime=True)

    if file_ext != "audio/ogg":
        return {
            "message": f"Only .ogg audio type supported!. Provided file's extension is {file_ext}"
        }

    url = urllib.request.Request(
        "https://stt.api.cloud.yandex.net/speech/v1/stt:recognize?%s" % params,
        data,
    )
    url.add_header("Authorization", "Api-Key %s" % API_KEY)

    response_data = urllib.request.urlopen(url).read().decode("UTF-8")
    decoded_data = json.loads(response_data)
    return decoded_data


@app.post("/ogg_to_wav/")
async def convert_ogg_to_wav(file: UploadFile):
    """Convert ogg audio to wav"""
    if not file or not file.filename.strip():
        return {"message": "No file sent"}

    data = await file.read()
    file_ext = magic.from_buffer(data, mime=True)

    if file_ext != "audio/ogg":
        return {
            "message": f"Only .ogg audio type supported! Provided file's extension is {file_ext}"
        }

    with open("audio.ogg", "wb") as f:
        f.write(data)

    d = ffmpeg.input("audio.ogg")
    out = ffmpeg.output(d, "audio.wav")
    out.run(overwrite_output=True)

    return FileResponse("audio.wav", media_type="audio/wav")
