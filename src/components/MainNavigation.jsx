import { NavLink } from "react-router-dom";
import classes from "../components/MainNavigation.module.css";

function MainNavigation() {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default MainNavigation;
