import Navigation from "@/components/layout/Navigation.jsx";
import logoSrc from "@/assets/react.svg"
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
   const [menuIsActive, setMenuIsActive] = useState(false);

   return (
      <>
         <header className="header">
            <div className="header__inner">
               <a href="/" className="header__logo flex items-center">
                  <img src={logoSrc} alt="logo"/>
                  <div className="text-xl ms-3">MovieFlix</div>
               </a>

               <Navigation inHeader={true}/>
               
               <button className="header__hamburger" onClick={() => setMenuIsActive(!menuIsActive)} type={"button"}>
                  {!menuIsActive ? <FaHamburger size={28}/> : <FaXmark size={28}/>}
               </button>
               

               {/*<div className="header__lang">*/}
               {/*    <select>*/}
               {/*        <option value="en" selected>en</option>*/}
               {/*        <option value="ru">ru</option>*/}
               {/*    </select>*/}
               {/*</div>*/}
            </div>
         </header>

         <div className={`mobile-menu ${menuIsActive ? "mobile-menu--active" : ""}`}>
            <Navigation handleCloseMobileNav={() => setMenuIsActive(false)}/>
         </div>
      </>
   )
}
export default Header
