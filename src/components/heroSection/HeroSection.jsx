import Typewriter from "typewriter-effect";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "./tsparticlesConfig";

const HeroSection = () => {
    const particlesInit = useCallback(async (engine)=> {
        await loadFull(engine);
    }, []);
    return(
        <section className="hero-container">
            <Particles init={particlesInit} params={particlesConfig} height="100vh" width="100vw" />
            <div className="intro">
                <p>Hi There! <span className="wave-hand">👋🏻</span></p>
                <h1 className="name">I'm <span className="color-purple">Rishi Srivastava</span></h1>

                <div className="typewriter-text">
                    <Typewriter
                        options={{
                            strings: [
                            "Developer",
                            "Frontend Developer",
                            "Open Source Contributor",
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </div>
            </div>
            <div className="profile-img-box">
            </div>
        </section>
    )
}

export default HeroSection