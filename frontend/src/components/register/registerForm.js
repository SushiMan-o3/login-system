import "./register.css";
import ParticlesBackground from "../backgroundParticleJS";
import { useState } from 'react';

export default function registerForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        } else {
            alert(`Account created for ${name} with email ${email}`);
            // change to login page after successful registration
        }

        event.preventDefault();
    };

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
