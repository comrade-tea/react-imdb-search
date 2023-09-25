import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
   return (
      <nav className="header__nav">
         <NavLink className="header__link" to={"/"}>Home</NavLink>
         <NavLink className="header__link" to={"/discover"}>Discover</NavLink>
         <NavLink className="header__link" to={"/search"}>Search</NavLink>
         <NavLink className="header__link" to={"/categories"}>Categories</NavLink>
         {/*<NavLink className="header__link" to={"/category/top-rated"}>Top rated</NavLink>*/}
         {/*<NavLink className="header__link" to={"/category/popular"}>Popular</NavLink>*/}
         {/*<NavLink className="header__link" to={"/category/now-playing"}>Now playing</NavLink>*/}
      </nav>
   )
}
export default Navigation

