import { NavLink } from "react-router-dom";

const Navigation = ({inHeader, handleCloseMobileNav = () => {}}) => {
   return (
      <nav className={`nav ${inHeader ? "header__nav" : ""}`}>
         <NavLink className="nav__link" onClick={handleCloseMobileNav} to={"/"}>Home</NavLink>
         <NavLink className="nav__link" onClick={handleCloseMobileNav} to={"/discover"}>Discover</NavLink>
         <NavLink className="nav__link" onClick={handleCloseMobileNav} to={"/search"}>Search</NavLink>
         <NavLink className="nav__link" onClick={handleCloseMobileNav} to={"/categories"}>Categories</NavLink>
      </nav>
   )
}
export default Navigation

