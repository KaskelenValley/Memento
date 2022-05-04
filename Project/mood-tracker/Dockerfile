FROM python:3.9

RUN apt-get update && \
	pip install poetry 

WORKDIR /app

COPY poetry.lock pyproject.toml ./

RUN poetry config virtualenvs.create false

RUN poetry install --no-dev

COPY . .

EXPOSE 8080

CMD uvicorn main:app --host 0.0.0.0 --port 8080