from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from google.cloud import translate
from google.api_core.exceptions import GoogleAPIError

from models import TranslateRequest, TranslateResponse


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

translator_client = translate.TranslationServiceClient()
request_template = {
    "parent": "projects/mood-tracker-348214/locations/global",
    "contents": [],
    "mime_type": "text/plain",
    "source_language_code": "ru",
    "target_language_code": "kk",
}


@app.get("/")
async def root():
    return {"message": "Memento Translator API v0.1"}


@app.post("/translate", response_model=TranslateResponse)
async def translate_text(request: TranslateRequest):
    request_template["contents"] = [request.text]
    request_template["source_language_code"] = request.source_lang
    request_template["target_language_code"] = request.target_lang

    try:
        response = translator_client.translate_text(request_template)
        translated_text = response.translations[0].translated_text
    except GoogleAPIError as e:
        raise HTTPException(status_code=400, detail=str(e))

    return TranslateResponse(text=translated_text)
