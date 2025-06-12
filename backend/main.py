from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None
    
@app.get("/")
def read_root():
    return {"hello": "world"}

# Query Parameters.
# the url will look like this: http://127.0.0.1:8000/items?item_id=3&q=fgh
# whether we give last slash or not fast api will redirect to the /items.
@app.get("/items/")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

# Path Parameters + Query Parameters.
# the url will look like this: http://127.0.0.1:8000/items/1?q=test
# the item_id is a path parameter and q is a query parameter.

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}

