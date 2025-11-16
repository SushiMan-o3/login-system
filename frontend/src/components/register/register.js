import "./register.css";
import RegisterForm from "./registerForm";
import api from "../../api"; 
import { useState } from "react";

export default function Register() {
  return (
    <div className="register-page">
      <RegisterForm />
    </div>
  );
}