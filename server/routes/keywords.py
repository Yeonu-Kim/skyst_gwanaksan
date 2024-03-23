from fastapi import APIRouter
import pandas as pd

from server.models.keywords import Keywords

router = APIRouter()


@router.post("/")
async def calculate_keywords(user_keywords: Keywords):
    df = pd.read_csv("***REMOVED***/characters.csv")
    for column in df.columns:
        df[column] = df[column].apply(lambda x: str(x).replace(",", ""))
        df["score"] = 0
        for field in Keywords.__fields__.keys():
            df["score"] += df[field].apply(lambda x: x in dict(user_keywords)[field])
    return df.sort_values("score", ascending=False).to_dict(orient="records")
