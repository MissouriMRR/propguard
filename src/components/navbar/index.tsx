import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { Icon } from "@iconify/react";
import listIcon from "@iconify/icons-ic/round-format-list-bulleted";
import { useLocalStorageView } from "../hooks/index";

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

  svg:hover {
    filter: invert(58%) sepia(81%) saturate(2820%) hue-rotate(173deg)
      brightness(90%) contrast(90%);
    cursor: pointer;
  }
`;

const NavLogo: AnyStyledComponent = styled.a`
  height: 4rem;
  width: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  text-decoration: none;

  &:active {
    padding: 1.25rem;
  }
`;

const NavIcon: AnyStyledComponent = styled(Icon)`
  height: 4rem;
  width: 4rem;
  padding: 0.75rem;
  color: ${textPrimary};

  &:active {
    padding: 1rem;
  }
`;

const Navbar: React.FC = (): JSX.Element => {
  const [selectorDisplay, setSelectorDisplay] = useGlobal("selectorDisplay");
  const [tutorialDisplay, setTutorialDisplay] = useGlobal("tutorialDisplay");
  const [, setSelectorView] = useLocalStorageView();

  const toggleDisplay = (): void => {
    if (selectorDisplay) {
      setSelectorView("true");
    } else {
      setSelectorView("false");
    }
    setSelectorDisplay(!selectorDisplay);
    setTutorialDisplay(!tutorialDisplay);
  };

  return (
    <NavWrapper>
      <NavLogo to="/" onClick={toggleDisplay}>
        <Logo />
      </NavLogo>
      <NavIcon icon={listIcon} width="2.5rem" onClick={toggleDisplay} />
    </NavWrapper>
  );
};

export { Navbar };
