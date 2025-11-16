import "./register.css";
import ParticlesBackground from "../backgroundParticleJS";
import { useState } from 'react';

export default function register() {
    return (
        <div className="App">
            <ParticlesBackground />
            <div style={{ position: "relative", zIndex: 1, color: "white", marginTop: "4rem", textAlign: "center" }}>
                <h1>Create</h1>
                <p>Create your account here.</p>
            </div>
        </div>
    );
}
