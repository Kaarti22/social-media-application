from pydantic import BaseModel
from datetime import datetime

class UserCreate(BaseModel):
    name: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class PostCreate(BaseModel):
    content: str
    userId: str

class PostResponse(BaseModel):
    id: str
    content: str
    createdAt: datetime
    userId: str