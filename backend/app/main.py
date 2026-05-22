from fastapi import FastAPI
from app.supabase_client import supabase

app = FastAPI()


@app.get("/")
def root():
    return {"message": "Backend running"}


@app.get("/collections")
def get_collections():
    response = supabase.table("collections").select("*").execute()
    return response.data