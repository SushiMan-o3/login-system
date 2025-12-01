import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/home/home";
import Register from "./components/register/Register"; 

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
          
    </div>
  );
}

export default App;
