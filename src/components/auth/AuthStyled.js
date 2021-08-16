import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  color: darkblue;

  .user-form {
    display: flex;
    flex-direction: column;
    width: 280px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 16px;
  }
  .user-form-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
  }
  .user-form-label {
    position: relative;
    margin-bottom: 8px;
    padding-top: 8px;
  }
  .user-form-input {
    height: 30px;
    width: 100%;
    padding-left: 8px;
    margin: 10px 0;
    outline: none;
    border: 1px solid cornflowerblue;
    border-radius: 14px;
  }
  .user-form-input:focus + .icon-user,
  .user-form-input:not(:placeholder-shown) + .icon-user {
    opacity: 0;
  }
  .user-form-input:not(:placeholder-shown)::placeholder {
    opacity: 0;
  }
  .user-form-input:focus::placeholder {
    opacity: 0;
  }
  .user-form-input::placeholder {
    color: cornflowerblue;
    padding-left: 25px;
    font-size: 14px;
    transition: opacity 300ms linear;
  }
  .icon-user {
    position: absolute;
    bottom: 20px;
    left: 16px;
    width: 12px;
    height: 12px;
    fill: cornflowerblue;
    transition: opacity 300ms linear;
  }
  .user-form-button {
    align-self: center;
    width: 120px;
    height: 24px;
    background-color: cornflowerblue;
    border: none;
    border-radius: 14px;
    color: white;
    text-transform: uppercase;
    padding: 0 20px;
    cursor: pointer;
  }
`;
