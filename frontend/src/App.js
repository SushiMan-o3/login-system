import { useState } from "react";
import './App.css';
import Home from "./components/home/home";
import Login from "./components/login/login";


let loggedIn = true;

const userInfo = {
  
};

function App() {
  return (
    <div className="App">
      <h1>Welcome to the App</h1>
      < Home />
        if (!loggedIn) {
          <Login />
        }
          
    </div>
  );
}

export default App;
