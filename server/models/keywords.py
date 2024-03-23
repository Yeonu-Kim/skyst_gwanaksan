from typing import List
from pydantic import BaseModel


class Keywords(BaseModel):
    mbti: List[str]
    genre: List[str]
    job: List[str]
    category: List[str]
    personality: List[str]
    gender: List[str]


class Character(BaseModel):
    id: int
    name: str
    mbti: str
    anime_name: str
    genre: str
    job: str
    category: str
    personality: str
    gender: str
    description: str
    image: str
