import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { Button } from "../button";

import { grey, textPrimary } from "../../constants";

const StyledHeaderContainer: AnyStyledComponent = styled.header`
  border-top: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

const StyledHeaderRow: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  h1 {
    color: ${textPrimary};
  }
`;

const Header = (): JSX.Element => {
  const [editorState, setEditorState] = useGlobal("editorState");
  const [editorSteps, setEditorSteps] = useGlobal("editorSteps");

  const addTutorialStep = (): void => {
    const newSteps = [
      ...editorSteps,
      {
        stepTitle: `New step ${new Date().getTime()}`,
        stepHint: "",
        stepSuccess: "",
        content: [
          {
            type: "code",
            value: ""
          }
        ]
      }
    ];
    setEditorSteps(newSteps);
  };

  const goToStep = async (step: number): Promise<void> => {
    let newStep = step;
    if (step < 0) {
      newStep = 0;
    } else if (step >= editorSteps.length) {
      newStep = editorSteps.length - 1;
    }

    await setEditorState({
      ...editorState,
      step: newStep
    });
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
        <div>
          <Button
            text="Prev"
            submitFunction={(): Promise<void> => goToStep(editorState.step - 1)}
            width="6rem"
          />
          {editorSteps.map((step, index) => (
            <Button
              text={index.toString()}
              // Ensures that keys are unique
              key={`${step.stepTitle}_${new Date().getTime()}`}
              submitFunction={(): Promise<void> => goToStep(index)}
              width="2.5rem"
            />
          ))}
          <Button
            text="Prev"
            submitFunction={(): Promise<void> => goToStep(editorState.step + 1)}
            width="6rem"
          />
        </div>
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
