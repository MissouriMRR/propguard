import React, { useState } from "reactn";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";
import styled, { AnyStyledComponent, CSSProperties } from "styled-components";
import { Icon } from "@iconify/react";
import chevronUp from "@iconify-icons/feather/chevron-up";
import chevronDown from "@iconify-icons/feather/chevron-down";
import bxTrashAlt from "@iconify-icons/bx/bx-trash-alt";

import { codeColor, grey } from "../../constants";
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
  background-color: ${codeColor};
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
    backgroundColor: codeColor,
    fontFamily: "Source Code Pro",
    fontSize: "16px",
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
        <Editor
          value={content.value}
          style={codeInputStyle}
          onValueChange={(code: string): void => {
            changeHandler(code, index);
          }}
          tabSize={4}
          highlight={(code: string): string => highlight(code, languages.py)}
          padding="0.5rem"
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
