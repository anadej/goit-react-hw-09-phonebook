import { createReducer, combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  signOutUser,
} from "./authAction";

const authReducerPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["idToken", "refreshToken"],
};

const userAuthReducer = createReducer(
  {
    idToken: "",
    refreshToken: "",
  },
  {
    [registerUserSuccess]: (_, { payload }) => ({
      idToken: payload.idToken,
      refreshToken: payload.refreshToken,
    }),
    [loginUserSuccess]: (_, { payload }) => ({
      idToken: payload.idToken,
      refreshToken: payload.refreshToken,
    }),
    [signOutUser]: () => ({
      idToken: "",
      refreshToken: "",
    }),
  }
);

const isLoadingAuthReducer = createReducer(false, {
  [registerUserRequest]: () => true,
  [registerUserSuccess]: () => false,
  [registerUserError]: () => false,
  [loginUserRequest]: () => true,
  [loginUserSuccess]: () => false,
  [loginUserError]: () => false,
  [signOutUser]: () => false,
});

const errorAuthReducer = createReducer("", {
  [registerUserRequest]: () => "",
  [registerUserError]: (_, { payload }) => payload,
  [loginUserRequest]: () => "",
  [loginUserError]: (_, { payload }) => payload,
  [signOutUser]: () => "",
});

export default combineReducers({
  userAuth: persistReducer(authReducerPersistConfig, userAuthReducer),
  isLoadingAuth: isLoadingAuthReducer,
  errorAuth: errorAuthReducer,
});
