import React, { useState } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import "../app/normalize.css";

import AceEditor from "react-ace";
import { Icon } from "@iconify/react";
import chevronUp from "@iconify-icons/feather/chevron-up";
import chevronDown from "@iconify-icons/feather/chevron-down";
import bxTrashAlt from "@iconify-icons/bx/bx-trash-alt";
import { Navbar } from "../navbar";
import { HintInput } from "./hintInput";

import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

import { background, grey, accent, textPrimary } from "../../constants";

interface StyledProps {
  text: string;
}

interface DeleteProps {
  visible: string;
}

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

const StyledHeader: AnyStyledComponent = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid ${grey};
  border-left: none;
  border-bottom: none;
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

const StyledStepNav: AnyStyledComponent = styled.div`
  height: 100%;
  width: 75px;
  color: white;
  border-bottom: 1px solid ${grey};
  border-right: 1px solid ${grey};
  border-top: 1px solid ${grey};
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

const StepContentList: AnyStyledComponent = styled.div``;

const ContentBlock: AnyStyledComponent = styled.div`
  display: flex;
  border: 1px solid #727272;
  margin-bottom: 20px;
`;

const ContentBlockInnerWrapper: AnyStyledComponent = styled.div`
  padding: 20px;
  width: ${(props: DeleteProps): string =>
    props.visible === "flex" ? "93%" : "100%"};
`;

const StyledButton: AnyStyledComponent = styled.button`
  height: 2.5rem;
  width: 7rem;
  background: ${(props: StyledProps): string =>
    props.text === "Run" ? accent : background};
  border: 2px solid #e9e9e9;
  border-radius: 1px;
  color: ${textPrimary};
  font-size: 18px;
  font-weight: 600;
  outline: none;
  margin-bottom: 20px;

  &:hover {
    background-color: rgba(256, 256, 256, 0.2);
    cursor: pointer;
  }

  &:active {
    height: 2rem;
  }
`;

const UpDownContainer: AnyStyledComponent = styled.div`
  position: relative;
  float: right;
  display: inline-block;
`;

const Arrow: AnyStyledComponent = styled(Icon)`
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const TextInput: AnyStyledComponent = styled.textarea`
  width: 100%;
  min-height: 82px;
  background-color: #46464e;
  outline: none;
  border: none;
  border-radius: 1px;
  padding: 5px;
  color: #f5f5f5;
  resize: none;
`;

const DeleteBlock: AnyStyledComponent = styled.div`
  display: ${(props: DeleteProps): string => props.visible};
  border-left: solid 1px #727272;
  width: 7%;
  text-align: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const TrashIcon: AnyStyledComponent = styled(Icon)`
  align-self: center;
  width: 22px;
  height: 22px;
`;

const TutEditor: React.FC = (): JSX.Element => {
  const [content, setContent] = useState([
    {
      type: "text",
      value: ""
    }
  ]);

  const [showDelete, setShowDelete] = useState("none");

  const changeType = (type: string, index: number): void => {
    const contentCopy = [...content];
    contentCopy[index].type = type;
    setContent(contentCopy);
  };

  const changeOrder = (direction: "up" | "down", index: number): void => {
    const contentCopy = [...content];
    if (direction === "up" && index - 1 >= 0) {
      const temp = contentCopy[index - 1];
      contentCopy[index - 1] = contentCopy[index];
      contentCopy[index] = temp;
    } else if (direction === "down" && index + 1 < content.length) {
      const temp = contentCopy[index + 1];
      contentCopy[index + 1] = contentCopy[index];
      contentCopy[index] = temp;
    }
    setContent(contentCopy);
  };

  const addBlock = (): void => {
    const contentCopy = [...content];
    contentCopy.push({
      type: "text",
      value: ""
    });
    setContent(contentCopy);
  };

  const deleteBlock = (index: number): void => {
    const contentCopy = [...content];
    contentCopy.splice(index, 1);
    setContent(contentCopy);
  };

  const handleTextChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const contentCopy = [...content];
    contentCopy[index].value = event.target.value;
    setContent(contentCopy);
  };

  return (
    <MainWrapper>
      <Navbar />
      <StyledEditor>
        <StyledHeader>
          <h2>Tutorial Editor</h2>
        </StyledHeader>
        <MainWrapper>
          <StyledStepNav />
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
              <StepContentList>
                {content.map((value: ContentBlock, index: number) => {
                  return (
                    <ContentBlock
                      key={index.toString()}
                      onMouseEnter={(): void => {
                        setShowDelete("flex");
                      }}
                      onMouseLeave={(): void => {
                        setShowDelete("none");
                      }}
                    >
                      <ContentBlockInnerWrapper>
                        <StyledButton
                          style={{
                            background:
                              value.type === "text"
                                ? "rgba(256, 256, 256, 0.2)"
                                : "none",
                            userSelect: "none"
                          }}
                          onClick={(): void => {
                            changeType("text", index);
                          }}
                        >
                          Text
                        </StyledButton>
                        <StyledButton
                          style={{
                            background:
                              value.type === "code"
                                ? "rgba(256, 256, 256, 0.2)"
                                : "none",
                            userSelect: "none"
                          }}
                          onClick={(): void => {
                            changeType("code", index);
                          }}
                        >
                          Code
                        </StyledButton>
                        <UpDownContainer>
                          <Arrow
                            icon={chevronUp}
                            onClick={(): void => {
                              changeOrder("up", index);
                            }}
                          />
                          <Arrow
                            icon={chevronDown}
                            onClick={(): void => {
                              changeOrder("down", index);
                            }}
                          />
                        </UpDownContainer>
                        <TextInput
                          value={content[index].value}
                          style={{
                            display:
                              content[index].type === "text" ? "block" : "none"
                          }}
                          type="text"
                          placeholder="Type text here..."
                          onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                          ): void => {
                            handleTextChange(index, event);
                          }}
                        />
                        <AceEditor
                          value={content[index].value}
                          style={{
                            position: "relative",
                            marginTop: "0px",
                            height: "82px",
                            width: "100%",
                            backgroundColor: background,
                            fontFamily: "Source Code Pro",
                            display:
                              content[index].type === "code" ? "block" : "none"
                          }}
                          fontSize="16px"
                          mode="python"
                          theme="tomorrow_night_eighties"
                          placeholder="Type code here..."
                          setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true,
                            tabSize: 4
                          }}
                        />
                      </ContentBlockInnerWrapper>
                      <DeleteBlock
                        visible={showDelete}
                        onClick={(): void => {
                          deleteBlock(index);
                        }}
                      >
                        <TrashIcon icon={bxTrashAlt} />
                      </DeleteBlock>
                    </ContentBlock>
                  );
                })}
              </StepContentList>
              <StyledButton onClick={addBlock} style={{ width: 150 }}>
                Add Block
              </StyledButton>
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
