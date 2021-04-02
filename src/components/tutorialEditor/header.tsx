import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { grey, textPrimary } from "../../constants";

const StyledHeaderContainer: AnyStyledComponent = styled.header`
  border-top: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

const StyledHeaderRow: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;

  h1 {
    color: ${textPrimary};
  }
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderRow>
        <h1>Editor</h1>
      </StyledHeaderRow>
    </StyledHeaderContainer>
  );
};

export { Header };
