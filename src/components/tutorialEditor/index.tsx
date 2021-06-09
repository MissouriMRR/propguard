import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import { CodeEditor } from "../codeEditor";
import { EditorStep } from "../../types/editorTypes";
import { HintInput } from "./hintInput";
import { Header } from "./header";
import { Navbar } from "../navbar";
import { StepContent } from "./stepContent";

import { background, grey } from "../../constants";
import { Button } from "../button";

interface ContentBlock {
  type: string;
  value: string;
}

const StyledEditorContainer: AnyStyledComponent = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: 900px;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  background: ${background};
  overflow: auto;
`;

const StyledEditor: AnyStyledComponent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MainWrapper: AnyStyledComponent = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: none;
  flex: 1;
`;

const StyledTitle: AnyStyledComponent = styled.div`
  height: 42px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;
`;

const StyledLeftHalf: AnyStyledComponent = styled.div`
  height: 100%;
  width: 50%;
  color: white;
  border-right: 1px solid ${grey};
`;

const StyledRightHalf: AnyStyledComponent = styled.div`
  height: 100%;
  width: 50%;
  color: white;
  border-right: 1px solid ${grey};
`;

const StyledStepSection: AnyStyledComponent = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem 2rem 2rem;
`;

const StyledTextInput: AnyStyledComponent = styled.div`
  height: 80px;
  width: 100%;
  color: white;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
`;

const StyledLabel: AnyStyledComponent = styled.label`
  color: white;
  width: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
`;

const StepContentBody: AnyStyledComponent = styled.div`
  padding: 40px;
`;

const ContentBlock: AnyStyledComponent = styled.div`
  display: flex;
  border: 1px solid ${grey};
  margin-bottom: 20px;
`;

const TutEditor: React.FC = (): JSX.Element => {
  const [editorState] = useGlobal("editorState");
  const [editorSteps, setEditorSteps] = useGlobal("editorSteps");
  const [steps, setSteps] = useGlobal("editorSteps");

  const setStepState = (newStep: EditorStep): void => {
    setSteps([
      ...steps.slice(0, editorState.step),
      newStep,
      ...steps.slice(editorState.step + 1, steps.length)
    ]);
  };

  const addBlock = (): void => {
    const stepCopy = steps[editorState.step];
    stepCopy.content.push({
      type: "text",
      value: ""
    });

    setStepState(stepCopy);
  };

  const deleteBlock = (index: number): void => {
    const stepCopy = steps[editorState.step];
    stepCopy.content = [
      ...stepCopy.content.slice(0, index),
      ...stepCopy.content.slice(index + 1, stepCopy.content.length)
    ];

    setStepState(stepCopy);
  };

  const changeOrder = (direction: "up" | "down", index: number): void => {
    const stepCopy = steps[editorState.step];
    const contentCopy = stepCopy.content;
    let diff = 0;

    if (direction === "up" && index - 1 >= 0) {
      diff = -1;
    } else if (direction === "down" && index + 1 < contentCopy.length) {
      diff = 1;
    }

    const temp = contentCopy[index + diff];
    contentCopy[index + diff] = contentCopy[index];
    contentCopy[index] = temp;

    stepCopy.content = contentCopy;
    setStepState(stepCopy);
  };

  const toggleBlockType = (type: string, index: number): void => {
    const stepCopy = steps[editorState.step];
    stepCopy.content[index].type = type;
    setStepState(stepCopy);
  };

  // This change handler works for both text blocks and code blocks
  // by checking the type of the change argument.
  const blockChangeHandler = (
    change: React.ChangeEvent<HTMLInputElement> | string,
    index: number
  ): void => {
    let changeText = "";
    // Checks to see what type the change argument is because it can
    // either be an onChange event or just a string, which is what Ace Editor
    // uses for the code block
    if (typeof change === "object" && change.target) {
      changeText = change.target.value;
    } else if (typeof change === "string") {
      changeText = change;
    } else return;

    const stepCopy = steps[editorState.step];
    stepCopy.content[index].value = changeText;
    setStepState(stepCopy);
  };

  const changeEditorStepDetail = async (
    attribute: string,
    value: string
  ): Promise<void> => {
    const newStep = editorSteps[editorState.step];
    newStep[attribute] = value;

    await setEditorSteps([
      ...editorSteps.slice(0, editorState.step),
      newStep,
      ...editorSteps.slice(editorState.step + 1, steps.length)
    ]);
  };

  return (
    <StyledEditorContainer>
      <Navbar />
      <StyledEditor>
        <Header />
        <MainWrapper>
          <StyledLeftHalf>
            <StyledTitle>
              <h3>Step</h3>
            </StyledTitle>
            <StyledStepSection>
              <StyledTextInput>
                <StyledLabel>Step Title:</StyledLabel>
                <HintInput
                  attributeName="stepTitle"
                  value={editorSteps[editorState.step].stepTitle}
                  setValue={changeEditorStepDetail}
                  placeholder="Step Title"
                />
              </StyledTextInput>
              <StyledTextInput>
                <StyledLabel>Hint:</StyledLabel>
                <HintInput
                  attributeName="stepHint"
                  value={editorSteps[editorState.step].stepHint}
                  setValue={changeEditorStepDetail}
                  placeholder="Hint"
                />
              </StyledTextInput>
              <StyledTextInput>
                <StyledLabel>Success Message:</StyledLabel>
                <HintInput
                  attributeName="stepSuccess"
                  value={editorSteps[editorState.step].stepSuccess}
                  setValue={changeEditorStepDetail}
                  placeholder="Success Message"
                />
              </StyledTextInput>
            </StyledStepSection>
            <StyledTitle>
              <h3>Step Content</h3>
            </StyledTitle>
            <StepContentBody>
              <div>
                {steps[editorState.step].content.map(
                  (content: ContentBlock, index: number) => {
                    return (
                      <StepContent
                        content={content}
                        index={index}
                        key={index.toString()}
                        deleteBlock={deleteBlock}
                        changeOrder={changeOrder}
                        toggleBlockType={toggleBlockType}
                        changeHandler={blockChangeHandler}
                      />
                    );
                  }
                )}
              </div>
              <Button
                submitFunction={addBlock}
                width="150px"
                text="Add Block"
              />
            </StepContentBody>
          </StyledLeftHalf>

          <StyledRightHalf>
            <StyledTitle>
              <h3>Code Solution</h3>
            </StyledTitle>
            <CodeEditor
              value={editorSteps[editorState.step].answer}
              onChange={(code: string): Promise<void> =>
                changeEditorStepDetail("answer", code)
              }
              customStyles={{
                position: "relative",
                backgroundColor: background
              }}
            />
          </StyledRightHalf>
        </MainWrapper>
      </StyledEditor>
    </StyledEditorContainer>
  );
};

export { TutEditor };
