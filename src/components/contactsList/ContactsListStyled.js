import styled from "styled-components";

export const ContactsListStyled = styled.div`
  margin-top: 20px;
  width: 320px;
  table,
  th,
  td {
    color: darkblue;
    text-align: center;
    vertical-align: middle;
  }

  .contactDeleteBtn {
    position: relative;
    width: 24px;
    height: 24px;
    background-color: cornflowerblue;
    border: none;
    border-radius: 14px;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    cursor: pointer;
  }
  .icon-user {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -6px 0 0 -6px;
    width: 12px;
    height: 12px;
    fill: white;
    transition: opacity 300ms linear;
  }
`;
