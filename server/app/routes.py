from fastapi import APIRouter, Depends, Header, HTTPException
from app.database import db
from app.models import UserCreate, PostCreate

router = APIRouter()

@router.post("/register/")
async def create_user(user: UserCreate):
    return await db.user.create(data=user.dict())

@router.post("/posts/")
async def create_post(post: PostCreate):
    return await db.post.create(data=post.dict())

SECRET_API_KEY = "your_secret_api_key_here"

@router.get("/posts/")
async def get_posts(api_key: str = Header(None)):
    if api_key != SECRET_API_KEY:
        raise HTTPException(status_code=403, detail="Unauthorized")
    posts = await db.post.find_many()
    return posts