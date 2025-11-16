import "./register.css";
import ParticlesBackground from "../backgroundParticleJS";
import { useState } from 'react';

export default function register() {
    return (
        <div className="App">
            <ParticlesBackground />
            <div className="name">
                <h1>Create Account</h1>
                
                <p>name</p>
                <input type="text" id="name" name="name" className="inputBox" required />

                <p>email</p>
                <input type="email" id="email" name="email" className="inputBox" required />

                <p>password</p>
                <input type="password" id="password" name="password" className="inputBox" required />

                <button type="submit" className="signupbutton">Sign Up</button>
            </div>
        </div>
    );
}
