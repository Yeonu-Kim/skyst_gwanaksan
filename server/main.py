from fastapi import FastAPI

from server.routes.keywords import router as keywords_router

app = FastAPI()

app.include_router(keywords_router, prefix="/keywords")


@app.get("/")
def hello():
    return "Hello World!"
