import { useState } from "react";
import './App.css';
import Home from "./components/home/home";
import Login from "./components/home/login/Login";
import Register from "./components/register/Register"; 


let loggedIn = false;

const userInfo = {
  
};

function App() {
  return (
    <div className="App">
      <Home />
          
    </div>
  );
}

export default App;
