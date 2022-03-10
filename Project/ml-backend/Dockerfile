FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

RUN pip3 install pipenv

COPY Pipfile ./
COPY Pipfile.lock ./

RUN set -ex && pipenv install --deploy --system

WORKDIR /app
COPY ./app .

EXPOSE $PORT

CMD uvicorn main:app --host 0.0.0.0 --port $PORT