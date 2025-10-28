from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import markdown
import os

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

@app.get("/api/about-me")
def get_about_me():
    """Read and return the about me content from markdown file"""
    try:
        # Get the directory where main.py is located
        current_dir = os.path.dirname(os.path.abspath(__file__))
        markdown_file_path = os.path.join(current_dir, "about_me.md")

        # Read the markdown file
        with open(markdown_file_path, "r", encoding="utf-8") as file:
            markdown_content = file.read()

        # Convert markdown to HTML
        html_content = markdown.markdown(markdown_content)

        return {
            "success": True,
            "data": {
                "content": html_content,
                "raw_markdown": markdown_content
            }
        }
    except FileNotFoundError:
        return {
            "success": False,
            "error": "About me markdown file not found"
        }
    except Exception as e:
        return {
            "success": False,
            "error": f"Error reading about me content: {str(e)}"
        }

