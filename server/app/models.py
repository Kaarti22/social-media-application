from pydantic import BaseModel
from datetime import datetime

class UserCreate(BaseModel):
    name: str
    email: str
    password: str

class PostCreate(BaseModel):
    content: str
    user_id: str

class PostResponse(BaseModel):
    id: str
    content: str
    createdAt: datetime
    user_id: str