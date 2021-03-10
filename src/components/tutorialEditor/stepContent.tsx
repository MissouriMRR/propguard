import React, { useState } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import "../app/normalize.css";

import AceEditor from "react-ace";
import { Icon } from "@iconify/react";
import chevronUp from "@iconify-icons/feather/chevron-up";
import chevronDown from "@iconify-icons/feather/chevron-down";
import bxTrashAlt from "@iconify-icons/bx/bx-trash-alt";

import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

import { background, grey } from "../../constants";
import { Button } from "../textEditor/button";

interface DeleteProps {
  visible: string;
}

interface ContentBlock {
  type: string;
  value: string;
}

const ContentBlock: AnyStyledComponent = styled.div`
  display: flex;
  border: 1px solid ${grey};
  margin-bottom: 20px;
`;

const ContentBlockInnerWrapper: AnyStyledComponent = styled.div`
  padding: 20px;
  width: ${(props: DeleteProps): string =>
    props.visible === "flex" ? "93%" : "100%"};
`;

const UpDownContainer: AnyStyledComponent = styled.div`
  position: relative;
  float: right;
  display: inline-block;
  margin-bottom: 15px;
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

interface ContentBlock {
  type: string;
  value: string;
}

interface StepContentProps {
  value: ContentBlock;
  index: number;
  content: ContentBlock[];
  setContent: Function;
}

const StepContent: React.FC<StepContentProps> = (props): JSX.Element => {
  const { value, index, content, setContent } = props;

  const [hovering, setHovering] = useState(-1);

  const codeInput = {
    position: "relative",
    marginTop: "0px",
    height: "82px",
    width: "100%",
    backgroundColor: background,
    fontFamily: "Source Code Pro",
    display: content[index].type === "code" ? "block" : "none"
  };

  const changeType = (type: string): void => {
    const contentCopy = [...content];
    contentCopy[index].type = type;
    setContent(contentCopy);
  };

  const changeOrder = (direction: "up" | "down"): void => {
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

  const deleteBlock = (): void => {
    const contentCopy = [...content];
    contentCopy.splice(index, 1);
    setContent(contentCopy);
  };

  const handleTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const contentCopy = [...content];
    contentCopy[index].value = event.target.value;
    setContent(contentCopy);
  };

  const handleCodeChange = (code: string): void => {
    const contentCopy = [...content];
    contentCopy[index].value = code;
    setContent(contentCopy);
  };

  return (
    <ContentBlock
      key={index.toString()}
      onMouseEnter={(): void => {
        setHovering(index);
      }}
      onMouseLeave={(): void => {
        setHovering(-1);
      }}
    >
      <ContentBlockInnerWrapper>
        <Button
          backgroundColor={
            value.type === "text" ? "rgba(256, 256, 256, 0.2)" : "none"
          }
          submitFunction={(): void => {
            changeType("text");
          }}
          text="Text"
        />
        <Button
          backgroundColor={
            value.type === "code" ? "rgba(256, 256, 256, 0.2)" : "none"
          }
          submitFunction={(): void => {
            changeType("code");
          }}
          text="Code"
        />
        <UpDownContainer>
          <Arrow
            icon={chevronUp}
            onClick={(): void => {
              changeOrder("up");
            }}
          />
          <Arrow
            icon={chevronDown}
            onClick={(): void => {
              changeOrder("down");
            }}
          />
        </UpDownContainer>
        <TextInput
          value={content[index].value}
          style={{
            display: content[index].type === "text" ? "block" : "none"
          }}
          type="text"
          placeholder="Type text here..."
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            handleTextChange(event);
          }}
        />
        <AceEditor
          value={content[index].value}
          style={codeInput}
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
          onChange={(code: string): void => {
            handleCodeChange(code);
          }}
        />
      </ContentBlockInnerWrapper>
      <DeleteBlock
        visible={hovering === index ? "flex" : "none"}
        onClick={(): void => {
          deleteBlock();
        }}
      >
        <TrashIcon icon={bxTrashAlt} />
      </DeleteBlock>
    </ContentBlock>
  );
};

export { StepContent };
