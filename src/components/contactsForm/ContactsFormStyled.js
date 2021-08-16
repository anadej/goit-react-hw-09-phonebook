import styled from "styled-components";

export const ContactsFormStyled = styled.div`
  .phoneForm {
    display: flex;
    flex-direction: column;
    width: 280px;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 16px;
  }
  .labelForm {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    position: relative;
  }
  .inputForm {
    height: 30px;
    width: 100%;
    padding-left: 8px;
    margin: 5px 0;
    outline: none;
    border: 1px solid cornflowerblue;
    border-radius: 14px;
  }
  .inputForm:focus + .icon-user,
  .inputForm:not(:placeholder-shown) + .icon-user {
    opacity: 0;
  }
  .inputForm:not(:placeholder-shown)::placeholder {
    opacity: 0;
  }
  .inputForm:focus::placeholder {
    opacity: 0;
  }
  .inputForm::placeholder {
    color: cornflowerblue;
    padding-left: 25px;
    font-size: 14px;
    transition: opacity 300ms linear;
  }
  .icon-user {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    fill: cornflowerblue;
    transition: opacity 300ms linear;
  }
  .buttonForm {
    align-self: center;
    width: 140px;
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
