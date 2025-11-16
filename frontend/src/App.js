import { useState } from "react";
import './App.css';
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";


let loggedIn = true;

const userInfo = {
  
};

function App() {
  return (
    <div className="App">
      <Register />
          
    </div>
  );
}

export default App;
