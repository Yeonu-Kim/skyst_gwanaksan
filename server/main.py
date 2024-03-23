from fastapi import FastAPI
import clip
import pandas as pd
from PIL import Image
import torch

from server.routes.keywords import router as keywords_router
from server.routes.image import router as image_router

app = FastAPI()

app.include_router(image_router, prefix="/image")
app.include_router(keywords_router, prefix="/keywords")


@app.get("/")
def hello():
    return "Hello World!"


@app.on_event("startup")
def get_features():
    df = pd.read_csv("server/assets/characters.csv", index_col=False)
    for column in df.columns:
        df[column] = df[column].apply(lambda x: str(x).replace(",", ""))
    df["id"] = range(len(df))
    df.index = df["id"]

    device = "cuda" if torch.cuda.is_available() else "cpu"
    model, preprocess = clip.load("ViT-B/32", device=device)

    df["image"] = df["id"].apply(lambda x: Image.open(f"server/assets/images/{x}.png"))

    def encode_image(image):
        image_input = preprocess(image).unsqueeze(0).to(device)
        with torch.no_grad():
            image_features = model.encode_image(image_input)
        return image_features.cpu().numpy().tolist()

    df["embedding"] = df["image"].apply(encode_image)

    df.to_pickle("server/assets/characters.pkl")
