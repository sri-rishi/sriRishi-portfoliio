import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../components"


const Template = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Template;