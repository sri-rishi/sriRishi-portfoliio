import Typewriter from "typewriter-effect";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "./tsparticlesConfig";
import { ScrollDownMouse } from "../index";

const HeroSection = () => {
    const particlesInit = useCallback(async (engine)=> {
        await loadFull(engine);
    }, []);
    return(
        <section className="hero-container">
            <Particles init={particlesInit} params={particlesConfig} height="100vh" width="100vw" />
            <div className="intro">
                <p className="greetings">Hi There! <span className="wave-hand">👋🏻</span></p>
                <p className="name">I'm RISHI SRIVASTAVA</p>

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
            <ScrollDownMouse />
        </section>
    )
}

export default HeroSection