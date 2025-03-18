from prisma import Client

db = Client()

async def connect_db():
    await db.connect()

async def disconnect_db():
    await db.disconnect()