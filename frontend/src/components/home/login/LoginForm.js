import "./login.css";
import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    } else {
      onLogin({ email, password });
      alert(`Logged in with email ${email}`);
    }
  };

  return (
    <form className="login-box" onSubmit={handleSubmit}>
      <h1 style={{ color: 'white' }}>Log In to your account</h1>

      <p>Email</p>
      <input
        type="email"
        className="inputBox"
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <p>Password</p>
      <input
        type="password"
        className="inputBox"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" className="loginButton">
        Log in
      </button>
    </form>
  );
}
