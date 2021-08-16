import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ path, component, exact, isAuth }) => {
  return !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PrivateRoute;
