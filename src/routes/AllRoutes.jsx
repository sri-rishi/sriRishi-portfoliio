import { Route, Routes } from "react-router-dom"
import { Home } from "../pages"
import Template from "./Template"

const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Template />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
} 

export default AllRoutes;