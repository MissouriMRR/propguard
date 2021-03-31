import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import { Button } from "../button";

import { grey } from "../../constants";

const StyledHeaderContainer: AnyStyledComponent = styled.header`
  border-top: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

const StyledHeaderRow: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const Header = (): JSX.Element => {
  const [editorState] = useGlobal("editorState");
  const [editorSteps, setEditorSteps] = useGlobal("editorSteps");

  const addTutorialStep = (): void => {
    setEditorSteps([
      ...editorSteps,
      {
        stepTitle: "New step",
        stepHint: "",
        stepSuccess: "",
        content: [
          {
            type: "code",
            value: ""
          }
        ]
      }
    ]);
  };

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
          width="12rem"
        />
      </StyledHeaderRow>
      <StyledHeaderRow>
        <div>
          <Button
            text="Add step"
            submitFunction={addTutorialStep}
            width="10rem"
          />
          <Button
            text="Delete step"
            submitFunction={(): void => console.log("Edit")}
            width="10rem"
          />
        </div>
        {editorSteps.map((step, index) => (
          <p key={step.stepTitle}>{index}</p>
        ))}
        <p>Pagination row here</p>
        <Button
          text="Save and export"
          submitFunction={(): void => console.log("Edit")}
          width="12rem"
        />
      </StyledHeaderRow>
    </StyledHeaderContainer>
  );
};

export { Header };
