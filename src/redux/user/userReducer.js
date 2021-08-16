import { createReducer } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  loginUserSuccess,
  registerUserSuccess,
  signOutUser,
} from "../auth/authAction";

const userReducerPersistConfig = {
  key: "userInfo",
  storage: storage,
  whitelist: ["email", "displayName", "localId"],
};

const userReducer = createReducer(
  { email: "", displayName: "", localId: "" },
  {
    [registerUserSuccess]: (_, { payload }) => ({
      email: payload.email,
      displayName: payload.displayName,
      localId: payload.localId,
    }),
    [loginUserSuccess]: (_, { payload }) => ({
      email: payload.email,
      displayName: payload.displayName,
      localId: payload.localId,
    }),
    [signOutUser]: () => ({
      email: "",
      displayName: "",
      localId: "",
    }),
  }
);

export default persistReducer(userReducerPersistConfig, userReducer);
