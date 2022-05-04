from pydantic import BaseModel
from enum import Enum


class Status(str, Enum):
    UNAVAILABLE = "UNAVAILABLE"
    OK = "OK"


class StatusResponse(BaseModel):
    status: Status
