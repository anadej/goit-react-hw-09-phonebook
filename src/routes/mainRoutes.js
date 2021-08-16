import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(
      () => import("../pages/HomePage") /* webpackChunkName: "HomePage" */
    ),
    exact: true,
    isPrivate: false,
    restricted: false,
  },
  {
    name: "Contacts",
    path: "/contacts",
    component: lazy(
      () => import("../pages/ContactPage") /* webpackChunkName: "ContactPage" */
    ),
    exact: true,
    isPrivate: true,
    restricted: false,
  },
  {
    name: "Registration",
    path: "/register",
    component: lazy(
      () => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
  {
    name: "Login",
    path: "/login",
    component: lazy(
      () => import("../pages/AuthPage") /* webpackChunkName: "AuthPage" */
    ),
    exact: true,
    isPrivate: false,
    restricted: true,
  },
];
