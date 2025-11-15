import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List
import sqlite3 as sql

# Client Logging info
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    
# returned to client after creating user
class UserOut(BaseModel):
    id: int
    email: EmailStr

app = FastAPI()

origins = [
    "http://localhost:3000/register",
    "http://localhost:3000/login",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

connection = sql.connect('users.db', check_same_thread=False)
cursor = connection.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS users
                    (id INTEGER PRIMARY KEY AUTOINCREMENT,
                    email TEXT NOT NULL UNIQUE, 
                    password TEXT NOT NULL)
               ''')

connection.commit()
cursor.close()

# create user endpoint
@app.post("/register", response_model=UserOut)
def register(user: UserCreate):
    cursor = connection.cursor()
    
    cursor.execute('''INSERT INTO users (email, password)
                      VALUES (?, ?)''',
                   (user.email, user.password))
    
    connection.commit()
    user.id = cursor.lastrowid
    cursor.close()

    return UserOut(id=user.id, email=user.email)


@app.get("/login")
def create_user(email: EmailStr, password: str):
    pass

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)