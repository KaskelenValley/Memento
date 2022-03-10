import os

from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv(), override=True)
FOLDER_ID = os.environ.get("FOLDER_ID")
API_KEY = os.environ.get("API_KEY")

speechkit_config = {"FOLDER_ID": FOLDER_ID, "API_KEY": API_KEY}
