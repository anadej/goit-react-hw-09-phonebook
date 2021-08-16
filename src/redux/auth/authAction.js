import { createAction } from "@reduxjs/toolkit";

export const registerUserRequest = createAction("auth/registerUserRequest");
export const registerUserSuccess = createAction("auth/registerUserSuccess");
export const registerUserError = createAction("auth/registerUserError");

export const loginUserRequest = createAction("auth/loginUserRequest");
export const loginUserSuccess = createAction("auth/loginUserSuccess");
export const loginUserError = createAction("auth/loginUserError");

export const signOutUser = createAction("auth/signOutUser");
