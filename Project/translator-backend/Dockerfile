FROM python:3.9

RUN apt-get update && \
	pip install poetry 

WORKDIR /app

COPY poetry.lock pyproject.toml ./

RUN poetry config virtualenvs.create false

RUN poetry install --no-dev

COPY . .

EXPOSE $PORT

ENV VAULT_TOKEN=${VAULT_TOKEN}
ENV VAULT_ADDR=${VAULT_ADDR}

RUN curl --request GET --header "X-Vault-Token: ${VAULT_TOKEN}" "${VAULT_ADDR}/v1/cubbyhole/memento/google-creds" >> ./google-creds.json

ENV GOOGLE_APPLICATION_CREDENTIALS=google-creds.json

CMD uvicorn main:app --host 0.0.0.0 --port $PORT