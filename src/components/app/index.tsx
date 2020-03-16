import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import "./normalize.css"; // Normalize CSS styles across all browsers

const StyledAppWrapper: AnyStyledComponent = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App: React.FC = (): JSX.Element => {
  return (
    <StyledAppWrapper>
      <h1>Test</h1>
    </StyledAppWrapper>
  );
};

export { App };
