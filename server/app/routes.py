from fastapi import APIRouter, Depends
from app.database import db
from app.models import UserCreate, PostCreate

router = APIRouter()

@router.post("/users/")
async def create_user(user: UserCreate):
    return await db.user.create(data=user.dict())

@router.get("/users/")
async def get_users():
    return await db.user.find_many()

@router.post("/posts/")
async def create_post(post: PostCreate):
    return await db.post.create(data=post.dict())

@router.get("/posts/")
async def get_posts():
    return await db.post.find_many()