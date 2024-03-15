import React, { useState } from "react";
import "./Navbarstyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Register from "./Register/register";

const Navbar = () => {


  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">LNMIIT</h1>

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}

           <Link className="signup_link" to={'/register'}>Sign Up</Link>
          
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

