import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import listIcon from "@iconify/icons-ic/round-format-list-bulleted";
import pencilIcon from "@iconify/icons-mdi/pencil";
import bxlGithub from "@iconify-icons/bx/bxl-github";

import { useLocalStorageView } from "../hooks/index";

import { accent, textPrimary, grey } from "../../constants";
import Logo from "../../assets/logo.svg";

const NavWrapper: AnyStyledComponent = styled.nav`
  height: 100vh;
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${grey};
  color: ${textPrimary};

  svg:hover {
    filter: invert(58%) sepia(81%) saturate(2820%) hue-rotate(173deg)
      brightness(90%) contrast(90%);
    cursor: pointer;
  }
`;

const TopIcons: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

interface NavIconProps {
  readonly isSelected: boolean;
}

const NavLogo: AnyStyledComponent = styled(Link)<NavIconProps>`
  height: 4rem;
  width: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  text-decoration: none;
  filter: ${(props): string =>
    props.isSelected
      ? "invert(58%) sepia(81%) saturate(2820%) hue-rotate(173deg) brightness(90%) contrast(90%)"
      : "none"};

  &:active {
    padding: 1.25rem;
  }
`;

// Uses transient props when using the styled() function for NavLogo and NavIcon
// to prevent forwarding of the prop to the children to prevent console errors
// https://github.com/styled-components/styled-components/pull/2093
const NavIcon: AnyStyledComponent = styled(Icon)<NavIconProps>`
  height: 4rem;
  width: 4rem;
  padding: 0.75rem;
  color: ${(props): string => (props.isSelected ? accent : textPrimary)};

  &:active {
    padding: 1rem;
  }
`;

const Navbar: React.FC = (): JSX.Element => {
  const [componentView, setComponentView] = useGlobal("componentView");

  const setLocalStorage = (parameter: string): void => {
    if (localStorage) {
      const [, setComponentViewSave] = useLocalStorageView();
      setComponentViewSave(parameter);
    }
  };

  const openTutorialComponent = (): void => {
    setComponentView("TutorialComponent");
    setLocalStorage("TutorialComponent");
  };

  const openTutorialSelector = (): void => {
    setComponentView("TutorialSelector");
    setLocalStorage("TutorialSelector");
  };

  return (
    <NavWrapper>
      <TopIcons>
        <NavLogo
          to="/"
          onClick={openTutorialComponent}
          $isSelected={componentView === "TutorialComponent"}
        >
          <Logo />
        </NavLogo>
        <Link to="/">
          <NavIcon
            icon={listIcon}
            onClick={openTutorialSelector}
            $isSelected={componentView === "TutorialSelector"}
          />
        </Link>
        <Link to="/editor">
          <NavIcon
            icon={pencilIcon}
            $isSelected={componentView === "TutorialEditor"}
          />
        </Link>
      </TopIcons>
      <Link to="https://github.com/MissouriMRR/propguard">
        <NavIcon icon={bxlGithub} />
      </Link>
    </NavWrapper>
  );
};

export { Navbar };
