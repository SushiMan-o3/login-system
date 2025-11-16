import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1, 
      },
      background: {
        color: "#0d47a1",
      },
      particles: {
        number: {
          value: 80,
          density: { enable: true, area: 800 },
        },
        color: { value: "#ffffff" },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
        },
        size: {
          value: { min: 1, max: 4 },
        },
        opacity: { value: 0.5 },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null; 

  return <Particles id="tsparticles" options={options} />;
}
