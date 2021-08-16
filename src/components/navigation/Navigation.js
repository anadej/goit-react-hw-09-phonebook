import React from "react";
import { useSelector } from "react-redux";
import { getAuth } from "../../redux/auth/authSelector";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./navigationStyled";
import UserMenu from "./userMenu/UserMenu";

const Navigation = () => {
  const isAuth = useSelector(getAuth);

  return (
    <NavigationContainer>
      <ul className="navList">
        {mainRoutes.map((route) => (
          <NavigationListItem {...route} key={route.path} isAuth={isAuth} />
        ))}
        {
          isAuth && <UserMenu />
          // <li className="navLink" onClick={() => signOutUser()}>
          //   LOGOUT
          // </li>
        }
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
