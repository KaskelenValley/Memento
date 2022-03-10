FROM python:3.9

RUN apt-get update && \
	apt-get install -y libmagic1 libmagic-dev && \
	pip install poetry 

WORKDIR /app

COPY poetry.lock pyproject.toml requirements.txt ./

RUN poetry config virtualenvs.create false

RUN poetry install --no-dev

COPY . .

EXPOSE $PORT

CMD uvicorn main:app --host 0.0.0.0 --port $PORT