import { Fragment, useEffect } from "react";
import classes from "./Menu.module.css";
import { Link, NavLink, redirect, Route } from "react-router-dom";
import ListOfMenuDetails from "./ListOfMenuDetails";

function Menu() {
  console.log("Menu Details");

  return (
    <Fragment>
      <main className={classes.container}>
        <div className={classes.headingMenu}>
          <span>Our Menu</span>
          <div className={classes.aboutborder}></div>
        </div>
        <ul>
          <li>
            <NavLink
              to="All"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Breakfast"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Breakfast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Lunch"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Lunch
            </NavLink>
          </li>

          <li>
            <NavLink
              to="Shakes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Shakes
            </NavLink>
          </li>
        </ul>
      </main>
    </Fragment>
  );
}

export default Menu;
