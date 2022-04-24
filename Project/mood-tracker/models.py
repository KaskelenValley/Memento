from pydantic import BaseModel


class Text(BaseModel):
    text: str


class MoodResponse(BaseModel):
    mood: str
    mood_score: float
