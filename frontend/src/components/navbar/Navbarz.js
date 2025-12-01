// src/components/navbar/Navbarz.js
import React, { useEffect, useState } from "react";
import "./navbar.css";

export default function Navbarz({ onOpenLogin }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // if scrolling down and past a small threshold → hide
      if (currentY > lastScrollY && currentY > 80) {
        setShowNavbar(false);
      } else {
        // scrolling up → show
        setShowNavbar(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "" : "navbar--hidden"}`}>
      <div className="nav-left">
        <span className="nav-logo">MyApp</span>
      </div>

      <div className="nav-right">
        <button className="nav-btn">Home</button>

        <button className="nav-btn" onClick={onOpenLogin}>
          Login
        </button>

        <a href="/register" className="nav-btn nav-link-btn">
          Register
        </a>
      </div>
    </nav>
  );
}
