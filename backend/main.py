import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List
import sqlite3 as sql

# Client Logging info
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    
# returned to client after creating user
class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr

app = FastAPI()

origins = [
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
                    name TEXT NOT NULL,
                    email TEXT NOT NULL, 
                    password TEXT NOT NULL)
               ''')

connection.commit()
cursor.close()

# create user endpoint
@app.post("/register", response_model=UserOut)
def register(user: UserCreate):
    cursor = connection.cursor()
    
    cursor.execute('''INSERT INTO users (name, email, password)
                      VALUES (?, ?, ?)''',
                   (user.name, user.email, user.password))
    
    connection.commit()
    newid = cursor.lastrowid
    cursor.close()

    return UserOut(id=newid, name=user.name, email=user.email)


@app.get("/login")
def login(email: EmailStr, password: str):
    cursor = connection.cursor()
    
    cursor.execute('''SELECT id, name, email, password FROM users WHERE email = ?''', (email))
    row = cursor.fetchone()
    cursor.close()
    
    if row is None or row[3] != password:
        return {"error": "Invalid email or password"}
    
    return UserOut(id=row[0], name=row[1], email=row[2])
        
    
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)