from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
import os
import pandas as pd

from server.routes.keywords import router as keywords_router
from server.routes.image import router as image_router, get_image_embedding

load_dotenv()

app = FastAPI()

app.include_router(image_router, prefix="/image")
app.include_router(keywords_router, prefix="/keywords")

origins = [
    "http://localhost:3000",
    "http://ec2-34-228-60-199.compute-1.amazonaws.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI()


@app.get("/")
def hello():
    return "Hello World!"


@app.on_event("startup")
def generate_pickle():
    if os.path.exists("***REMOVED***/characters.pkl"):
        return
    df = pd.read_excel("***REMOVED***/characters.xlsx")
    for column in df.columns:
        df[column] = df[column].apply(lambda x: str(x).replace(",", ""))
    df["id"] = range(len(df))
    df.index = df["id"]

    df["embedding"] = df["imageDescription"].apply(get_image_embedding)
    df.to_pickle("***REMOVED***/characters.pkl")
