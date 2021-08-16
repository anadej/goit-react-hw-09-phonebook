import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUser } from "../../../redux/auth/authAction";
import { getDisplayName } from "../../../redux/auth/authSelector";

const UserMenu = ({ signOutUser, displayName }) => {
  return (
    <ul className="navList auth">
      <li className="navListItem navLink">Welcome, {displayName}</li>
      <li className="navListItem">
        <NavLink
          to="/login"
          exact="true"
          className="navLink"
          activeClassName="navLinkActive"
          onClick={() => signOutUser()}
        >
          LOGOUT
        </NavLink>

        {/* <a className="navLink" href="/login" onClick={() => signOutUser()}></a> */}
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    displayName: getDisplayName(state),
  };
};

export default connect(mapStateToProps, { signOutUser })(UserMenu);
