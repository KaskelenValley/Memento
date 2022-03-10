import urllib.request
import json

import magic
from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from settings import speechkit_config

FOLDER_ID = speechkit_config['FOLDER_ID']
IAM_TOKEN = speechkit_config['IAM_TOKEN']
params = "&".join([
    "topic=general",
    "folderId=%s" % FOLDER_ID,
    "lang=ru-RU"
])

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Memento ML Backend API v0.1"}

@app.post("/stt_sync/")
async def convert_stt_sync(file: UploadFile):
    """Convert speech-to-text using synchronous recognition from SpeechKit API"""
    if not file or not file.filename.strip():
        return {"message": "No file sent"}

    data = await file.read()
    file_ext = magic.from_buffer(data, mime=True)
    if file_ext != 'audio/ogg':
        return {"message": f"Only .ogg audio type supported!. Provided file's extension is {file_ext}"}

    url = urllib.request.Request("https://stt.api.cloud.yandex.net/speech/v1/stt:recognize?%s" % params, data=data)
    url.add_header("Authorization", "Bearer %s" % IAM_TOKEN)

    response_data = urllib.request.urlopen(url).read().decode('UTF-8')
    decoded_data = json.loads(response_data)
    return decoded_data


