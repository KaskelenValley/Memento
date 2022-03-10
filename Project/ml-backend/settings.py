import os

from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
FOLDER_ID = os.environ.get("FOLDER_ID")
IAM_TOKEN = os.environ.get("IAM_TOKEN")

speechkit_config = {
    'FOLDER_ID': FOLDER_ID,
    'IAM_TOKEN': IAM_TOKEN
}