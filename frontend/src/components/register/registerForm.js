import "./register.css";
import ParticlesBackground from "../backgroundParticleJS";
import { useState, useEffect} from 'react';
import "./register.css";  


export default function RegisterForm({ onRegister }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        } else {
            onRegister({ name, email, password });
            alert(`Account created for ${name} with email ${email}`);
        }
    };

    return (
        <div className="App">
            <div className="particles-bg">
                <ParticlesBackground />
            </div>

            <form className="box" onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                
                <p>Name</p>
                <input type="text" id="name" name="name" className="inputBox" onChange={(e) => setName(e.target.value)} required />

                <p>Email</p>
                <input type="email" id="email" name="email" className="inputBox" onChange={(e) => setEmail(e.target.value)} required />

                <p>Password</p>
                <input type="password" id="password" name="password" className="inputBox" onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit" className="signupbutton">Sign Up</button>
            </form>
        </div>
    );
}
