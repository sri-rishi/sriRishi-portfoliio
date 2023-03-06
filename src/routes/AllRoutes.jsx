import { Route, Routes } from "react-router-dom"
import { About, Home } from "../pages"
import Template from "./Template"

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Template />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
} 

export default AllRoutes;