import React, { useGlobal } from "reactn";
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

// FIXME: Hover and click effect
const NavLogo: AnyStyledComponent = styled.a`
  height: 4rem;
  width: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;
  text-decoration: none;

  &:hover {
    color: grey;
    text-decoration: none;
  }
`;

// FIXME: Hover and click effect
const NavIcon: AnyStyledComponent = styled(Icon)`
  height: 4rem;
  width: 4rem;
  padding: 0.75rem;
  color: ${textPrimary};
`;

const Navbar: React.FC = (): JSX.Element => {
  const [, setSelectorDisplay] = useGlobal("selectorDisplay");
  const [, setTutorialDisplay] = useGlobal("tutorialDisplay");

  return (
    <NavWrapper>
      <NavLogo
        to="/"
        onClick={(): void => {
          setTutorialDisplay(true);
          setSelectorDisplay(false);
        }}
      >
        <Logo />
      </NavLogo>
      <NavIcon
        icon={listIcon}
        width="2.5rem"
        onClick={(): void => {
          setTutorialDisplay(false);
          setSelectorDisplay(true);
        }}
      />
    </NavWrapper>
  );
};

export { Navbar };
