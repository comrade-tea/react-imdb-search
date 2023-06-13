import {Link, NavLink} from "react-router-dom";
import Sidebar from "@/Sidebar.jsx";

const Navigation = () => {
    return (
        <nav className="header__nav">
            <NavLink className="header__link" to={"/"} element={<Sidebar/>}>Home</NavLink>
            <NavLink className="header__link" to={"/top-rated"} element={<Sidebar/>}>Top rated</NavLink>
            <NavLink className="header__link" to={"/popular"} element={<Sidebar/>}>Popular</NavLink>
        </nav>
    )
}
export default Navigation
