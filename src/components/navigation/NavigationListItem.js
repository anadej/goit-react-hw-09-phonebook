import React from "react";
import { NavLink } from "react-router-dom";

const NavigationListItem = ({
  path,
  exact,
  name,
  isPrivate,
  restricted,
  isAuth,
}) => {
  return (
    <>
      {!isPrivate && !restricted && (
        <li className="navListItem">
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="navLinkActive"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {isPrivate && !restricted && isAuth && (
        <li className="navListItem">
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="navLinkActive"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {!isPrivate && restricted && !isAuth && (
        <li className="navListItem">
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="navLinkActive"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItem;
