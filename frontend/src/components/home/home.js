import "./home.css";
import Navbarz from "../navbar/Navbarz";
import ParticlesBackground from "../backgroundParticleJS";

export default function home() {
  return (
    <div className="App">
      <ParticlesBackground />

      <div style={{ position: "relative", zIndex: 1, color: "white", marginTop: "4rem", textAlign: "center" }}>
        <h1>My React + Particles Site</h1>
        <p>Cool background, right?</p>
      </div>
 
    </div>
  );
}
