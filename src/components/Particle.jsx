import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Particle() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    console.log("Particles loaded:", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.03,
            width: 1,
          },
          move: {
            direction: "right",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 0.05,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 160,
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
