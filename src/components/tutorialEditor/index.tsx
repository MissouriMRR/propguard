import React, { useState } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import AceEditor from "react-ace";
import { HintInput } from "./hintInput";
import { Header } from "./header";
import { Navbar } from "../navbar";

import { StepContent } from "./stepContent";

import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

import { background, grey } from "../../constants";
import { Button } from "../button";

interface ContentBlock {
  type: string;
  value: string;
}

const StyledEditor: AnyStyledComponent = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: stretch;
  background: ${background};
  overflow: auto;
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
  padding: 2px;
  padding-bottom: 20px;
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

// TODO: See if some of the block editing functions can be simplified
const TutEditor: React.FC = (): JSX.Element => {
  const [step /* , setStep */] = useState(0);
  const [steps, setSteps] = useState([
    {
      stepTitle: "Step 1",
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

  const addBlock = (): void => {
    const stepCopy = steps[step];
    stepCopy.content.push({
      type: "text",
      value: ""
    });

    setSteps([
      ...steps.slice(0, step),
      stepCopy,
      ...steps.slice(step + 1, steps.length)
    ]);
  };

  const deleteBlock = (index: number): void => {
    const stepCopy = steps[step];
    stepCopy.content = [
      ...stepCopy.content.slice(0, index),
      ...stepCopy.content.slice(index + 1, stepCopy.content.length)
    ];

    setSteps([
      ...steps.slice(0, step),
      stepCopy,
      ...steps.slice(step + 1, steps.length)
    ]);
  };

  const changeOrder = (direction: "up" | "down", index: number): void => {
    const stepCopy = steps[step];
    const contentCopy = stepCopy.content;
    let diff = 0;

    if (direction === "up" && index - 1 >= 0) {
      // const temp = contentCopy[index - 1];
      // contentCopy[index - 1] = contentCopy[index];
      // contentCopy[index] = temp;
      diff = -1;
    } else if (direction === "down" && index + 1 < contentCopy.length) {
      diff = 1;
    }

    const temp = contentCopy[index + diff];
    contentCopy[index + diff] = contentCopy[index];
    contentCopy[index] = temp;

    stepCopy.content = contentCopy;
    setSteps([
      ...steps.slice(0, step),
      stepCopy,
      ...steps.slice(step + 1, steps.length)
    ]);
  };

  const toggleBlockType = (type: string, index: number): void => {
    const stepCopy = steps[step];
    stepCopy.content[index].type = type;
    setSteps([
      ...steps.slice(0, step),
      stepCopy,
      ...steps.slice(step + 1, steps.length)
    ]);
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

    const stepCopy = steps[step];
    stepCopy.content[index].value = changeText;
    setSteps([
      ...steps.slice(0, step),
      stepCopy,
      ...steps.slice(step + 1, steps.length)
    ]);
  };

  return (
    <MainWrapper>
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
                <HintInput placeholder="Step Title" />
              </StyledTextInput>
              <StyledTextInput>
                <StyledLabel>Hint:</StyledLabel>
                <HintInput placeholder="Hint" />
              </StyledTextInput>
              <StyledTextInput>
                <StyledLabel>Success Message:</StyledLabel>
                <HintInput placeholder="Success Message" />
              </StyledTextInput>
            </StyledStepSection>
            <StyledTitle>
              <h3>Step Content</h3>
            </StyledTitle>
            <StepContentBody>
              <div>
                {steps[step].content.map(
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
            <AceEditor
              style={{
                position: "relative",
                marginTop: "1%",
                height: "90%",
                width: "99.9%",
                backgroundColor: background,
                fontFamily: "Source Code Pro"
              }}
              fontSize="16px"
              mode="python"
              theme="tomorrow_night_eighties"
              placeholder="Write your code solution here."
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 4
              }}
            />
          </StyledRightHalf>
        </MainWrapper>
      </StyledEditor>
    </MainWrapper>
  );
};

export { TutEditor };
