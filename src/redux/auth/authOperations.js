import { loginUser, registerUser } from "../../services/auth_api";
import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
} from "./authAction";

const registerUserOperation = (user) => async (dispatch) => {
  try {
    dispatch(registerUserRequest());
    const res = await registerUser(user);
    dispatch(registerUserSuccess(res.registerData));
  } catch (error) {
    dispatch(registerUserError(error.message));
  }
};

const loginUserOperation = (user) => async (dispatch) => {
  try {
    dispatch(loginUserRequest());
    const res = await loginUser(user);
    dispatch(loginUserSuccess(res.loginData));
  } catch (error) {
    dispatch(loginUserError(error.message));
  }
};

export { registerUserOperation, loginUserOperation };
