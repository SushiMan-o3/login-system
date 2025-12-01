// home/home.js
import "./home.css";
import Navbarz from "../navbar/Navbarz";
import ParticlesBackground from "../backgroundParticleJS";
import { useState } from "react";
import LoginForm from "./login/LoginForm";
import api from "../../api"; // adjust path if needed

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = async ({ email, password }) => {
    try {
      await api.post("/login", { email, password });
      console.log("User logged in!");
      setShowLogin(false); // close modal on success
    } catch (err) {
      console.error("Error logging in user:", err);
    }
  };

  return (
    <div className="App">
      <ParticlesBackground />

      <Navbarz onOpenLogin={() => setShowLogin(true)} />
        
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          marginTop: "4rem",
          textAlign: "center",
        }}
      >
        <h1>My React + Particles Site</h1>
        <p>Cool background, right?</p>

        <button onClick={() => setShowLogin(true)} className="open-login-btn">
          Log in
        </button>
      </div>

      {showLogin && (
        <div
          className="modal-backdrop"
          onClick={() => setShowLogin(false)} // click outside to close
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // don't close when clicking inside
          >
            <LoginForm onLogin={handleLogin} />
          </div>
        </div>
      )}
    </div>
  );
}
