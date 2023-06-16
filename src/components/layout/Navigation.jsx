import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="header__nav">
            <NavLink className="header__link" to={"/"}>Home</NavLink>
            <NavLink className="header__link" to={"/top-rated"}>Top rated</NavLink>
            <NavLink className="header__link" to={"/popular"}>Popular</NavLink>
        </nav>
    )
}
export default Navigation
