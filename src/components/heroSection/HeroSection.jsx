import Typewriter from "typewriter-effect"

const HeroSection = () => {
    return(
        <section className="hero-container">
            <div className="intro">
                <p>Hi There! <span className="wave-hand">👋🏻</span></p>
                <h1 className="name">I'm <span className="color-purple">Rishi Srivastava</span></h1>

                <p className="typewriter-text">
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
                </p>
            </div>
            <div className="profile-img-box">
            </div>
        </section>
    )
}

export default HeroSection