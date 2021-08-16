import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { getAuth } from "../../redux/auth/authSelector";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import { MainContainer } from "./MainStyled";
import Loader from "react-loader-spinner";

const Main = () => {
  const isAuth = useSelector(getAuth);
  return (
    <MainContainer>
      <Suspense
        fallback={
          <div className="loader">
            <Loader type="ThreeDots" color="darkblue" height={80} width={80} />
          </div>
        }
      >
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute {...route} key={route.path} isAuth={isAuth} />
            ) : (
              <PublicRoute {...route} key={route.path} isAuth={isAuth} />
            )
          )}
        </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
