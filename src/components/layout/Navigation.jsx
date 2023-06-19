import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="header__nav">
            <NavLink className="header__link" to={"/"}>Home</NavLink>
            <NavLink className="header__link" to={"/movies"}>Movies</NavLink>
            <NavLink className="header__link" to={"/movies/top-rated"}>Top rated</NavLink>
            <NavLink className="header__link" to={"/movies/popular"}>Popular</NavLink>
            <NavLink className="header__link" to={"/movies/now-playing"}>Now playing</NavLink>
        </nav>
    )
}
export default Navigation
