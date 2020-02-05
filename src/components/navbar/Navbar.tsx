import React from "react";
import { Link } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";

const NavWrapper: AnyStyledComponent = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 90px 0 90px;
  height: 15%;
`;

const NavLogo: AnyStyledComponent = styled(Link)`
  color: black;
  font-size: 32px;
  text-decoration: none;

  &:hover {
    color: grey;
    text-decoration: none;
  }
`;

const NavLink: AnyStyledComponent = styled(Link)`
  color: black;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: grey;
    text-decoration: none;
  }
`;

const Navbar: React.FC = (): JSX.Element => {
  return (
    <NavWrapper>
      <NavLogo to="/">Propguard</NavLogo>
      <NavLink to="/tutorial">Tutorial</NavLink>
    </NavWrapper>
  );
};

export { Navbar };
