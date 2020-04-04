import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Icon } from "@iconify/react";
import listIcon from "@iconify/icons-ic/round-format-list-bulleted";

import { textPrimary, grey } from "../../constants";
import Logo from "../../assets/logo.svg";

const NavWrapper: AnyStyledComponent = styled.nav`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${grey};
  color: ${textPrimary};
`;

const NavLogo: AnyStyledComponent = styled.a`
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  color: blue;
  font-size: 32px;
  text-decoration: none;

  &:hover {
    color: grey;
    text-decoration: none;
  }
`;

const NavIcon: AnyStyledComponent = styled(Icon)`
  height: 4rem;
  width: 4rem;
  padding: 0.5rem;
  color: ${textPrimary};
`;

// TODO: Add tutorial selector icon
const Navbar: React.FC = (): JSX.Element => {
  return (
    <NavWrapper>
      <NavLogo to="/">
        <Logo />
      </NavLogo>
      <NavIcon icon={listIcon} width="2.5rem" />
    </NavWrapper>
  );
};

export { Navbar };
