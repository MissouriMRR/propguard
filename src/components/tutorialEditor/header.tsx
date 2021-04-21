import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import { Button } from "../button";

import { accent, grey, textPrimary } from "../../constants";

const StyledHeaderContainer: AnyStyledComponent = styled.header`
  border-top: 1px solid ${grey};
  border-right: 1px solid ${grey};
  padding-bottom: 1rem;
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

const StyledMarginWrapper: AnyStyledComponent = styled.div`
  & > * {
    margin-right: 0.25rem;
  }
`;

const Header = (): JSX.Element => {
  const [editorState, setEditorState] = useGlobal("editorState");
  const [editorSteps, setEditorSteps] = useGlobal("editorSteps");

  const addTutorialStep = async (): Promise<void> => {
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
        ],
        answer: ""
      }
    ];
    await setEditorSteps(newSteps);
  };

  const removeTutorialStep = async (toRemoveIndex: number): Promise<void> => {
    if (editorSteps.length <= 1) return;
    const newSteps = editorSteps.filter((_, index) => index !== toRemoveIndex);

    await setEditorState({
      ...editorState,
      step: Math.min(editorState.step, editorSteps.length - 2)
    });
    await setEditorSteps(newSteps);
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

  // TODO: Editing tutorial info, discarding progress, and exporting
  // will be in future versions
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
          submitFunction={(): void => console.log("Discard")}
          width="12rem"
        />
      </StyledHeaderRow>
      <StyledHeaderRow>
        <StyledMarginWrapper>
          <Button
            text="Add step"
            submitFunction={addTutorialStep}
            width="10rem"
          />
          <Button
            text="Delete step"
            submitFunction={(): Promise<void> =>
              removeTutorialStep(editorState.step)
            }
            width="10rem"
          />
        </StyledMarginWrapper>
        <StyledMarginWrapper>
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
              backgroundColor={index === editorState.step ? accent : undefined}
            />
          ))}
          <Button
            text="Next"
            submitFunction={(): Promise<void> => goToStep(editorState.step + 1)}
            width="6rem"
          />
        </StyledMarginWrapper>
        <Button
          text="Save and export"
          submitFunction={(): void => console.log("Export")}
          width="12rem"
        />
      </StyledHeaderRow>
    </StyledHeaderContainer>
  );
};

export { Header };
