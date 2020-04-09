import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { accent, background, textPrimary } from "../constants";

const Styled404: AnyStyledComponent = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${background};
  color: ${textPrimary};
`;

const StyledTitle: AnyStyledComponent = styled.h1`
  font-size: 64px;
  font-weight: 600;
  margin: 1rem 0;
`;

const StyledLink: AnyStyledComponent = styled.a`
  color: ${accent};
  font-size: 24px;
  text-decoration: none;

  :hover {
    color: ${textPrimary};
    font-weight: 600;
  }
`;

const NotFoundPage: React.FC = (): JSX.Element => {
  return (
    <Styled404>
      <StyledTitle>You appear lost...</StyledTitle>
      <StyledLink href="/">
        <p>Let&apos;s take you back to the right spot.</p>
      </StyledLink>
    </Styled404>
  );
};

export default NotFoundPage;
