from dotenv import load_dotenv
from fastapi import APIRouter
from typing import List
from openai import OpenAI
import pandas as pd
import clip
from PIL import Image
import torch
from io import StringIO
import requests
from sklearn.metrics.pairwise import cosine_similarity

load_dotenv()

router = APIRouter()

client = OpenAI()


def calculate_similarity(embedding1, embedding2):
    return cosine_similarity(embedding1, embedding2)[0][0]


@router.post("/")
async def generate_image_from_prompt(prompt: str, keyword_list: List[dict]):
    response = client.images.generate(
        model="dall-e-3",
        prompt="다음 설명에 맞는 애니메이션 캐릭터를 그려주세요: " + prompt,
        size="1024x1024",
        quality="standard",
        n=1,
    )
    image_url = response.data[0].url

    df = pd.read_pickle("***REMOVED***/characters.pkl")
    df["score"] = pd.Series([0] * len(df), index=df.index)

    device = "cuda" if torch.cuda.is_available() else "cpu"
    model, preprocess = clip.load("ViT-B/32", device=device)

    response = requests.get(image_url, stream=True)
    response.raw.decode_content = True
    im = Image.open(response.raw)

    image_input = preprocess(im).unsqueeze(0).to(device)
    with torch.no_grad():
        image_features = model.encode_image(image_input)

    df["score"] = df["embedding"].apply(lambda x: calculate_similarity(x, image_features))
    df = df[["id", "name", "anime_name", "score"]]

    keyword_df = pd.DataFrame(keyword_list)
    final_df = pd.merge(df, keyword_df, on=["name", "anime_name"], how="inner")
    final_df["score"] = final_df["score_x"] * 6 + final_df["score_y"]
    final_df.sort_values("score", ascending=False, inplace=True)
    final_df = final_df[["id_x", "name", "anime_name", "score"]]

    return {
        "image_url": image_url,
        "scores": final_df.to_dict(orient="records")
    }
