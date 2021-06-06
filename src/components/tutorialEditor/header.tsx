import React, { useState, useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import { Button } from "../button";
import { DiscardModal } from "./DiscardModal";
import { exportTutorial } from "../../utils/exportTutorial";
import { TutorialModal } from "./tutorialModal";

import { accent, grey, outputError, textPrimary } from "../../constants";

const StyledHeaderContainer: AnyStyledComponent = styled.header`
  border-top: 1px solid ${grey};
  border-right: 1px solid ${grey};
  padding: 0 2rem 0 2rem;
`;

const StyledHeaderRow: AnyStyledComponent = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;

  h1 {
    color: ${textPrimary};
    font-size: 24px;
  }
`;

const StyledMarginWrapper: AnyStyledComponent = styled.div`
  & > * {
    margin-right: 0.5rem;
  }
`;

const AlignCenter: AnyStyledComponent = styled.div`
  place-self: center;
`;

const AlignRight: AnyStyledComponent = styled.div`
  place-self: end;
`;

const Header = (): JSX.Element => {
  const [tutorialModal, setTutorialModal] = useState(false);
  const [discardModal, setDiscardModal] = useState(false);
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

  const saveTutorial = async (): Promise<void> => {
    await exportTutorial(
      editorState.selectedTutorial,
      editorState.selectedTutorialDesc,
      editorSteps
    );
  };

  const discardTutorial = (): void => {
    setEditorState({
      ...editorState,
      selectedTutorial: ""
    });
  };

  return (
    <StyledHeaderContainer>
      <TutorialModal
        isOpen={tutorialModal}
        closeModal={(): void => setTutorialModal(false)}
      />
      <DiscardModal
        isOpen={discardModal}
        closeModal={(): void => setDiscardModal(false)}
        discardFunction={discardTutorial}
        exportFunction={saveTutorial}
      />
      <StyledHeaderRow>
        <Button
          text="Edit info"
          submitFunction={(): void => setTutorialModal(true)}
          width="10rem"
        />
        <AlignCenter>
          <h1>{editorState.selectedTutorial}</h1>
        </AlignCenter>
        <AlignRight>
          <Button
            backgroundColor={outputError}
            text="Discard progress"
            submitFunction={(): void => setDiscardModal(true)}
            width="12rem"
          />
        </AlignRight>
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
        <AlignCenter>
          <StyledMarginWrapper>
            <Button
              text="Prev"
              submitFunction={(): Promise<void> =>
                goToStep(editorState.step - 1)
              }
              width="6rem"
            />
            {editorSteps.map((step, index) => (
              <Button
                text={index.toString()}
                // Ensures that keys are unique
                key={`${step.stepTitle}_${new Date().getTime()}`}
                submitFunction={(): Promise<void> => goToStep(index)}
                width="2.5rem"
                backgroundColor={
                  index === editorState.step ? accent : undefined
                }
              />
            ))}
            <Button
              text="Next"
              submitFunction={(): Promise<void> =>
                goToStep(editorState.step + 1)
              }
              width="6rem"
            />
          </StyledMarginWrapper>
        </AlignCenter>
        <AlignRight>
          <Button
            backgroundColor={accent}
            text="Save and export"
            submitFunction={saveTutorial}
            width="12rem"
          />
        </AlignRight>
      </StyledHeaderRow>
    </StyledHeaderContainer>
  );
};

export { Header };
