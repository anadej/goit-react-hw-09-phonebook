import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    display: flex;
  }

  .auth {
    margin-left: 80px;
  }
  .navListItem:not(:last-child) {
    margin-right: 20px;
  }

  .navLink {
    text-decoration: none;
    font-weight: 700;
    color: darkblue;
  }

  .navLinkActive {
    color: #eb4629;
  }
`;
