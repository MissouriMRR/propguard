import React, { useState } from "reactn";
import styled, { AnyStyledComponent, CSSProperties } from "styled-components";

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
import { Button } from "../button";

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
  content: ContentBlock;
  index: number;
  deleteBlock: (index: number) => void;
  changeHandler: (
    change: React.ChangeEvent<HTMLInputElement> | string,
    index: number
  ) => void;
  changeOrder: (direction: "up" | "down", index: number) => void;
  toggleBlockType: (type: string, index: number) => void;
}

const StepContent: React.FC<StepContentProps> = (props): JSX.Element => {
  const {
    content,
    index,
    deleteBlock,
    changeHandler,
    changeOrder,
    toggleBlockType
  } = props;

  const [hovering, setHovering] = useState(-1);

  const codeInputStyle: CSSProperties = {
    position: "relative",
    marginTop: "0px",
    height: "82px",
    width: "100%",
    backgroundColor: background,
    fontFamily: "Source Code Pro",
    display: content.type === "code" ? "block" : "none"
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
            content.type === "text" ? "rgba(256, 256, 256, 0.2)" : "none"
          }
          submitFunction={(): void => {
            toggleBlockType("text", index);
          }}
          text="Text"
        />
        <Button
          backgroundColor={
            content.type === "code" ? "rgba(256, 256, 256, 0.2)" : "none"
          }
          submitFunction={(): void => {
            toggleBlockType("code", index);
          }}
          text="Code"
        />
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
          value={content.value}
          style={{
            display: content.type === "text" ? "block" : "none"
          }}
          type="text"
          placeholder="Type text here..."
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            changeHandler(event, index);
          }}
        />
        <AceEditor
          value={content.value}
          style={codeInputStyle}
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
            changeHandler(code, index);
          }}
        />
      </ContentBlockInnerWrapper>
      <DeleteBlock
        visible={hovering === index ? "flex" : "none"}
        onClick={(): void => {
          deleteBlock(index);
        }}
      >
        <TrashIcon icon={bxTrashAlt} />
      </DeleteBlock>
    </ContentBlock>
  );
};

export { StepContent };
