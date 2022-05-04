from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import Text, MoodResponse
from get_model import get_sentiment_model

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
    return {"message": "Memento MoodTracker API v0.1"}


model, encoder = get_sentiment_model(model_name="mt_lstm_v1")


@app.post("/predict_mood", response_model=MoodResponse)
async def predict_mood(text: Text):
    encoded_input = encoder(text.text)
    mood, mood_score = "neutral", 0.5
    if encoded_input.shape[1] != 0:
        mood, mood_score = model.inference(encoded_input)
    return MoodResponse(mood=mood, mood_score=mood_score)
