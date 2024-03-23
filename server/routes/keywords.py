from fastapi import APIRouter
import pandas as pd

from server.models.keywords import Keywords

router = APIRouter()


@router.post("/")
async def calculate_keywords(user_keywords: Keywords):
    df = pd.read_pickle("server/assets/characters.pkl")
    df.drop(columns=["image", "embedding"], inplace=True)
    df["score"] = pd.Series([0] * len(df), index=df.index)
    for field in Keywords.model_fields:
        df["score"] += df[field].apply(lambda x: x in getattr(user_keywords, field))
    df = df.sort_values("score", ascending=False)
    return df.to_dict(orient="records")
