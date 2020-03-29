import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

const NavWrapper: AnyStyledComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 90px 0 90px;
  height: 15%;
`;

const NavLogo: AnyStyledComponent = styled.a`
  color: black;
  font-size: 32px;
  text-decoration: none;

  &:hover {
    color: grey;
    text-decoration: none;
  }
`;

const Navbar: React.FC = (): JSX.Element => {
  const [selectorDisplay, setSelectorDisplay] = useGlobal("selectorDisplay");
  const [tutorialDisplay, setTutorialDisplay] = useGlobal("tutorialDisplay");

  return (
    <NavWrapper>
      <NavLogo
        to="/"
        onClick={() => {
          setTutorialDisplay("none");
          setSelectorDisplay("block");
        }}
      >
        Propguard
      </NavLogo>
    </NavWrapper>
  );
};

export { Navbar };
