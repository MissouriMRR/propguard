import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import listIcon from "@iconify/icons-ic/round-format-list-bulleted";
import pencilIcon from "@iconify/icons-mdi/pencil";
import { useLocalStorageView } from "../hooks/index";

import { accent, textPrimary, grey } from "../../constants";
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

interface NavIconProps {
  isSelected: boolean;
}

const NavLogo: AnyStyledComponent = styled(Link)`
  height: 4rem;
  width: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  text-decoration: none;
  filter: ${(props: NavIconProps): string =>
    props.isSelected
      ? "invert(58%) sepia(81%) saturate(2820%) hue-rotate(173deg) brightness(90%) contrast(90%)"
      : "none"};

  &:active {
    padding: 1.25rem;
  }
`;

const NavIcon: AnyStyledComponent = styled(Icon)`
  height: 4rem;
  width: 4rem;
  padding: 0.75rem;
  color: ${(props: NavIconProps): string =>
    props.isSelected ? accent : textPrimary};

  &:active {
    padding: 1rem;
  }
`;

const Navbar: React.FC = (): JSX.Element => {
  const [componentView, setComponentView] = useGlobal("componentView");
  const [, setComponentViewSave] = useLocalStorageView();

  const openTutorialComponent = (): void => {
    setComponentView("TutorialComponent");
    // Saves panel choice on localstorage
    setComponentViewSave("TutorialComponent");
  };

  const openTutorialSelector = (): void => {
    setComponentView("TutorialSelector");
    setComponentViewSave("TutorialSelector");
  };

  const openTutorialEditor = (): void => {
    setComponentView("TutorialEditor");
    setComponentViewSave("TutorialEditor");
  };

  return (
    <NavWrapper>
      <NavLogo
        to="/"
        onClick={openTutorialComponent}
        isSelected={componentView === "TutorialComponent"}
      >
        <Logo />
      </NavLogo>
      <Link to="/">
        <NavIcon
          icon={listIcon}
          width="2.5rem"
          onClick={openTutorialSelector}
          isSelected={componentView === "TutorialSelector"}
        />
      </Link>
      <Link to="/editor" onClick={openTutorialEditor}>
        <NavIcon
          icon={pencilIcon}
          width="2.5rem"
          isSelected={componentView === "TutorialEditor"}
        />
      </Link>
    </NavWrapper>
  );
};

export { Navbar };
