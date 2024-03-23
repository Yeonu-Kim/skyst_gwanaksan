import base64
from dotenv import load_dotenv
from fastapi import APIRouter
from typing import List
from openai import OpenAI
import pandas as pd
import requests
from sklearn.metrics.pairwise import cosine_similarity

load_dotenv()

router = APIRouter()

client = OpenAI()


def get_image_embedding(image_description):
    response = client.embeddings.create(
        input=image_description,
        model="text-embedding-3-large"
    )
    return response.data[0].embedding


def calculate_similarity(embedding1, embedding2):
    return cosine_similarity([embedding1], [embedding2])[0][0]


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

    description = client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": "What’s in this image?"},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": image_url,
                        },
                    },
                ],
            }
        ],
        max_tokens=300,
    ).choices[0]

    image_features = get_image_embedding(description)

    df = pd.read_pickle("***REMOVED***/characters.pkl")
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
