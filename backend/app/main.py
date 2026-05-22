from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from app.supabase_client import supabase

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Request body model
class CollectionCreate(BaseModel):
    name: str


@app.get("/")
def root():
    return {"message": "Backend running"}


@app.get("/collections")
def get_collections():
    response = supabase.table("collections").select("*").execute()
    return response.data


@app.post("/collections")
def create_collection(collection: CollectionCreate):
    response = supabase.table("collections").insert({
        "name": collection.name
    }).execute()

    return response.data[0]