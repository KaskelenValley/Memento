from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
import json

from models import TranslateRequest, TranslateResponse
from settings import api_config


FOLDER_ID = api_config["FOLDER_ID"]
API_KEY = api_config["API_KEY"]

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

request_template = {
    "sourceLanguageCode": "ru",
    "targetLanguageCode": "kk",
    "texts": [0],
    "folderId": FOLDER_ID,
}

headers = {
    "Content-Type": "application/json",
    "Authorization": "Api-Key {0}".format(API_KEY),
}


@app.get("/")
async def root():
    return {"message": "Memento Translator API v0.1"}


@app.post("/translate", response_model=TranslateResponse)
async def translate_text(request: TranslateRequest):
    request_template["texts"] = [request.text]
    request_template["sourceLanguageCode"] = request.source_lang
    request_template["targetLanguageCode"] = request.target_lang

    response = requests.post(
        "https://translate.api.cloud.yandex.net/translate/v2/translate",
        json=request_template,
        headers=headers,
    )
    response = json.loads(response.text)
    return TranslateResponse(text=response["translations"][0]["text"])
