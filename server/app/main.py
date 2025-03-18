from fastapi import FastAPI
from app.database import connect_db, disconnect_db
from app.routes import router

app = FastAPI()

app.include_router(router)

@app.on_event("startup")
async def startup():
    await connect_db()

@app.on_event("shutdown")
async def shutdown():
    await disconnect_db()