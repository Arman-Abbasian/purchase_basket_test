import { NavLink } from "react-router-dom";
import React from "react";
import './navigation.css';
const Navigation = () => {
    return ( 
        <header className="mainNavigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'} className={({ isActive }) =>
                        isActive ? "activeLink" : undefined}>home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/cartPage'}>cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;