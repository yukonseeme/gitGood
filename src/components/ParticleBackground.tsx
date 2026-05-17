import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    // This should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = {
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        fullScreen:{
            enable: false,
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab" }, 
            },
            modes: {
                grab: { distance: 140, links: { opacity: 0.5 } },
            },
        },
        particles: {
            color: { value: "#ffffff" },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "out" },
            },
            number: { density: { enable: true,}, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    if (init) {
        return <Particles id="tsparticles" options={options} />;
    }

    return null;
};

export default ParticleBackground;