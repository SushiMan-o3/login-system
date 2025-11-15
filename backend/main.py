import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List
import sqlite3 as sql

class User(BaseModel):
    id: int
    first_name: str
    middle_name: str
    last_name: str
    email: EmailStr
    password: str

app = FastAPI()

origins = [
    "http://localhost:3000/register"
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

@app.get("/register", response_model=User)
def create_user(user: User):
    cursor = connection.cursor()
    cursor.row_factory = sql.Row

    cursor.execute('''SELECT * FROM users''')
    
    data = cursor.fetchall()
    cursor.close()

    return User(data)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)