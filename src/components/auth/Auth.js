import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserOperation,
  loginUserOperation,
} from "../../redux/auth/authOperations";
import { AuthContainer } from "./AuthStyled";
import sprite from "../../icons/project_sprites.svg";
import { useLocation } from "react-router-dom";
import { getError } from "../../redux/auth/authSelector";
import { resetError } from "../../redux/auth/authAction";

const initialState = {
  email: "",
  password: "",
  displayName: "",
};

const Auth = () => {
  const [state, setState] = useState({ ...initialState });

  let error = useSelector(getError);

  const dispatch = useDispatch();
  const location = useLocation();

  const isRegisterPage = location.pathname === "/register";

  useEffect(() => {
    if (isRegisterPage && error === "Request failed with status code 400") {
      alert("User with this name is already registered.");
    }
    if (!isRegisterPage && error === "Request failed with status code 400") {
      alert("User not found! Input correct login data.");
    }
    dispatch(resetError());
    // eslint-disable-next-line
  }, [error]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = state;
    isRegisterPage
      ? dispatch(registerUserOperation(state))
      : dispatch(loginUserOperation({ email, password }));
  };

  return (
    <AuthContainer>
      <form
        onSubmit={onHandleSubmit}
        className="user-form"
        autoComplete="off"
        name="userForm"
      >
        {isRegisterPage ? (
          <p className="user-form-title">Register</p>
        ) : (
          <p className="user-form-title">Login</p>
        )}
        {isRegisterPage && (
          <label className="user-form-label">
            Name
            <input
              type="text"
              name="displayName"
              onChange={onHandleChange}
              value={state.displayName}
              className="user-form-input"
              placeholder="Jony English"
              minLength="3"
              autoComplete="on"
              required
            />
            <svg className="icon-user">
              <use href={sprite + "#icon-user"} />
            </svg>
          </label>
        )}
        <label className="user-form-label">
          Email
          <input
            type="text"
            name="email"
            onChange={onHandleChange}
            value={state.email}
            className="user-form-input"
            placeholder="jony@gmail.com"
            minLength="3"
            autoComplete="on"
            required
          />
          <svg className="icon-user">
            <use href={sprite + "#icon-drawer"} />
          </svg>
        </label>
        <label className="user-form-label">
          Password
          <input
            type="text"
            name="password"
            onChange={onHandleChange}
            value={state.password}
            className="user-form-input"
            placeholder="Qwerty123"
            autoComplete="on"
            required
          />
          <svg className="icon-user">
            <use href={sprite + "#icon-user"} />
          </svg>
        </label>
        <button type="submit" className="user-form-button">
          {isRegisterPage ? "Register" : "Login"}
        </button>
      </form>
    </AuthContainer>
  );
};

export default Auth;
