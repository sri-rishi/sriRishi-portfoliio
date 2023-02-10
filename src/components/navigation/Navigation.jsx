import { useState } from "react";

const Navigation = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleNavDropDown = () => {
        if(openNav) {
            setOpenNav(false)
        }else {
            setOpenNav(true)
        } 
    }
    return (
        <nav className="nav">
            <div className="logo">
                <span>R</span>
                <span>S</span>
            </div>
            <div className="nav-links">
                <button className="nav-links-btn">About</button>
                <button className="nav-links-btn">Project</button>
                <button className="nav-links-btn">Blogs</button>
                <button className="nav-links-btn">Contact</button>
            </div>
            <div className={`hamburger ${openNav && "open"}`} onClick={() => handleNavDropDown()}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navigation;