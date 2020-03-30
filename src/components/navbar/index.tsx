import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { textPrimary, grey } from "../../constants";

const NavWrapper: AnyStyledComponent = styled.nav`
  border: 1px solid ${grey};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-items: center;
`;

const SelectionGroup: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavLogo: AnyStyledComponent = styled.a`
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${textPrimary};
  font-size: 32px;
  text-decoration: none;

  &:hover {
    color: grey;
    text-decoration: none;
  }
`;

// TODO: Add tutorial selector icon
const Navbar: React.FC = (): JSX.Element => {
  return (
    <NavWrapper>
      <SelectionGroup>
        {" "}
        <NavLogo to="/">P</NavLogo>
        <NavLogo to="/">T</NavLogo>
      </SelectionGroup>
      <NavLogo to="/">S</NavLogo>
    </NavWrapper>
  );
};

export { Navbar };
