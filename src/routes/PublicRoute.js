import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ path, component, exact, restricted, isAuth }) => {
  return isAuth && restricted ? (
    <Redirect to="/contacts" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
