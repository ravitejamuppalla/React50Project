import React, { useState } from "react";
import classes from "./Header.module.css";
import logoImage from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  const [displaysideBar, setSideBar] = useState("");
  function openNavbar() {
    setSideBar(true);
  }
  function closeIconHandler() {
    setSideBar(false);
  }
  return (
    <div id={classes.Header}>
      <div className={classes.HeaderImage}>
        <img src={logoImage} alt="HeaderLogo"></img>
      </div>
      <div className={classes.navSideBar}>
        <nav className={classes.nav_side}>
          <ul
            className={`${classes.nav_underLine} ${
              displaysideBar ? classes.activecurrent : ""
            } `}
          >
            <li>
              <i
                className={`${"glyphicon glyphicon-remove"} ${
                  classes.closeIcon
                }`}
                onClick={closeIconHandler}
              ></i>
            </li>
            <li>
              <NavLink to="/Home" activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shop" activeClassName={classes.active}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blog" activeClassName={classes.active}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeClassName={classes.active}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeClassName={classes.active}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/Bag" activeClassName={classes.active}>
                <div className={classes.shoppingIcon}>
                  <ShoppingBagOutlinedIcon
                    className={classes.shoppingIcon}
                  ></ShoppingBagOutlinedIcon>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`${classes.mobile} ${
          displaysideBar ? classes.activecurrent : ""
        }`}
      >
        <i className="fas fa-bars" onClick={openNavbar}></i>
        <div className={classes.bagIcon}>
          <ShoppingBagOutlinedIcon
            className={classes.shoppingIcon}
          ></ShoppingBagOutlinedIcon>
        </div>
      </div>
    </div>
  );
}
