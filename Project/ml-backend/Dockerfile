FROM python:3.9

RUN apt-get update && \
	apt-get install -y libmagic1 libmagic-dev ffmpeg && \
	pip install poetry 

WORKDIR /app

COPY poetry.lock pyproject.toml requirements.txt ./

RUN poetry config virtualenvs.create false

RUN poetry install --no-dev

COPY . .

EXPOSE $PORT

ENV FOLDER_ID=${FOLDER_ID}

ENV IAM_TOKEN=${IAM_TOKEN}

CMD uvicorn main:app --host 0.0.0.0 --port $PORT