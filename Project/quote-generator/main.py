from typing import Optional, Union

import requests
from fastapi import FastAPI
from fastapi.responses import Response
from fastapi.middleware.cors import CORSMiddleware

from models import QuoteResponse

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PICSUM_URL = "https://picsum.photos"


@app.get("/")
async def root():
    return {"message": "Memento Quote Generator API v0.1"}


@app.get("/random_quote", response_model=QuoteResponse)
def generate_quote():
    """Generates random inspirational quote.

    Returns:
        QuoteResponse: random quote and author of the quote.
    """
    r = requests.get("https://zenquotes.io/api/random")
    data = r.json()[0]
    quote, author = data["q"], data["a"]
    return QuoteResponse(quote=quote, author=author)


@app.get(
    "/random_image/{width}/{height}",
    responses={200: {"content": {"image/jpeg": {}}}},
    response_class=Response,
)
def generate_image(width: int, height: int, blur: Optional[Union[int, str]] = None):
    """Generates random image.

    Args:
        width (int): width of desired image
        height (int): height of desired image
        blur (Optional[Union[int, str]]): blur level from 1 to 10. can be null.
            if set ?blur without the amount, then it randomly gets image with amount of blur from 1 to 10.

    Returns:
        image (Response): generated random image.

    Examples:
        GET /random_image/400/200 - returns static image without blur with width 400 and height 200.
        GET /random_image/800/600/?blur - returns 800x600 image with random amount of blur (from 1 to 10).
        GET /random_image/800/600/?blur=4 - return 800x600 image with amount of blur = 4.
    """
    request_url = f"{PICSUM_URL}/{width}/{height}"
    if blur is not None:
        request_url += "/?blur"
        if isinstance(blur, int):
            request_url += f"={blur}"
    img = requests.get(request_url).content
    return Response(content=img, media_type="image/jpeg")
