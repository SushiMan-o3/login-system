import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, emailStr
from typing import List
import sqlite3 as sql

class User(BaseModel):
    id: int
    first_name: str
    middle_name: str
    last_name: str
    email: emailStr
    password: str

app = FastAPI()

origins = [
    "http://localhost:3000/register",
    "http://localhost:3000/login"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

connection = sql.connect('users.db')
cursor = connection.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS users
                    (id INTEGER PRIMARY KEY AUTOINCREMENT,
                    first_name TEXT,
                    middle_name TEXT,
                    last_name TEXT,
                    email TEXT NOT NULL UNIQUE, 
                    password TEXT NOT NULL),
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
               ''')

connection.commit()
cursor.close()

# create user endpoint
@app.post("/register", response_model=User)
def create_user(user: User):
    cursor = connection.cursor()
    cursor.execute('''INSERT INTO users (first_name, middle_name, last_name, email, password)
                      VALUES (?, ?, ?, ?, ?)''',
                   (user.first_name, user.middle_name, user.last_name, user.email, user.password))
    connection.commit()
    user.id = cursor.lastrowid
    cursor.close()
    
    return user