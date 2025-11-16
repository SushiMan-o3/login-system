import "./register.css";
import ParticlesBackground from "../backgroundParticleJS";
import { useState } from 'react';
import api from "../../api";

export default function register() {
    return (
        <div className="App">
            <div className="particles-bg">
                <ParticlesBackground />
            </div>

            <div className="box">
                <h1>Create Account</h1>
                
                <p>Name</p>
                <input type="text" id="name" name="name" className="inputBox" required />

                <p>Email</p>
                <input type="email" id="email" name="email" className="inputBox" required />

                <p>Password</p>
                <input type="password" id="password" name="password" className="inputBox" required />

                <button type="submit" className="signupbutton">Sign Up</button>
            </div>
        </div>
    );
}
