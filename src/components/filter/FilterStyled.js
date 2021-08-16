import styled from "styled-components";

export const FilterStyled = styled.label`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 16px;

  .inputFilter {
    height: 30px;
    width: 100%;
    padding-left: 8px;
    margin: 5px 0;
    outline: none;
    border: 1px solid cornflowerblue;
    border-radius: 14px;

    &:focus {
      outline: none;
      border: 2px solid lightblue;
    }
  }
`;
