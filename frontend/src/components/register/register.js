import "./register.css";
import RegisterForm from "./RegisterForm";
import api from "../../api"; 

export default function Register() {
  const handleRegister = async ({ name, email, password }) => {
    try {
      await api.post("/register", { name, email, password });
      console.log("User registered!");
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

  return (
    <div className="register-page">
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}