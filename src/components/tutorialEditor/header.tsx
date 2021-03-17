import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import { Button } from "../button";

import { grey } from "../../constants";

const StyledHeaderContainer: AnyStyledComponent = styled.header`
  border-top: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

const StyledHeaderRow: AnyStyledComponent = styled.div`
  border: solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Header = (): JSX.Element => {
  const [editorState] = useGlobal("editorState");

  return (
    <StyledHeaderContainer>
      <StyledHeaderRow>
        <Button
          text="Edit info"
          submitFunction={(): void => console.log("Edit")}
          width="10rem"
        />
        <h1>{editorState.selectedTutorial}</h1>
        <Button
          text="Discard progress"
          submitFunction={(): void => console.log("Edit")}
          width="10rem"
        />
      </StyledHeaderRow>
      <StyledHeaderRow>
        <Button
          text="Add step"
          submitFunction={(): void => console.log("Edit")}
          width="10rem"
        />
        <p>Pagination row here</p>
        <Button
          text="Save and export"
          submitFunction={(): void => console.log("Edit")}
          width="10rem"
        />
      </StyledHeaderRow>
    </StyledHeaderContainer>
  );
};

export { Header };
