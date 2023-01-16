import { NavLink } from "react-router-dom";
import React from "react";
import "./navigation.css";
import { useCart } from "../../Providers/CartProviders";
const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
            >
              home
            </NavLink>
          </li>
          <li className="cartLink">
            <NavLink to={"/cartPage"}>cart</NavLink>
            <span>{cart.length}</span>
          </li>
          <li>
            <NavLink to={"/login"}>login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
