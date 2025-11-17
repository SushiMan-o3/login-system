import "./register.css";
import loginForm from "./loginForm";
import api from "../../api"; 
import { useState, useEffect } from "react";

export default function Login() {
  const handleLogin = async ({ email, password }) => {
    try {
      await api.post("/login", { email, password });
      console.log("User logged in!");
    } catch (err) {
      console.error("Error logging in user:", err);
    }
  };

  return (
    <div className="login-page">
      <loginForm onLogin={handleLogin} />
    </div>
  );
}