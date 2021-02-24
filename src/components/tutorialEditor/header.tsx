import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import { grey } from "../../constants";

const StyledHeaderContainer: AnyStyledComponent = styled.header`
  border-top: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

const StyledHeaderRow: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
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
