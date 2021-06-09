import React, { useState, useEffect, useRef } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";
import styled, { AnyStyledComponent, CSSProperties } from "styled-components";

import { background } from "../../constants";

const FullEditor: AnyStyledComponent = styled.div`
  width: 100%;
  max-height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
`;

const LineNumber: AnyStyledComponent = styled.div`
  width: 24px;
  height: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  font-family: "Source Code Pro", monospace;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    margin: 0;
    color: #828282;
  }
`;

interface EditorWrapperProps {
  value: string;
  onChange: (value: string) => void;
  customStyles?: CSSProperties;
}

const CodeEditor: React.FC<EditorWrapperProps> = ({
  value,
  onChange,
  customStyles
}) => {
  const [lineCount, setLineCount] = useState(1);
  const lineNumberRef = useRef(null);

  const getLineNums = (): number[] => {
    const lineArray = [1];
    for (let i = 2; i <= lineCount; i += 1) {
      lineArray.push(i);
    }
    return lineArray;
  };

  useEffect(() => {
    const splitInput = value.split("\n");
    if (splitInput.length !== lineCount) setLineCount(splitInput.length);
  }, [value]);

  return (
    <FullEditor>
      <LineNumber ref={lineNumberRef}>
        {getLineNums().map(number => (
          <p key={number}>{number}</p>
        ))}
      </LineNumber>
      <Editor
        style={{
          position: "relative",
          backgroundColor: background,
          fontSize: "16px",
          fontFamily: `"Source Code Pro", "monospace"`,
          width: "100%",
          minHeight: "100px",
          height: `${lineCount * 20}px`,
          maxHeight: "none",
          resize: "both",
          ...customStyles
        }}
        value={value}
        onValueChange={onChange}
        tabSize={4}
        highlight={(code: string): string => highlight(code, languages.py)}
        padding="0.5rem"
      />
    </FullEditor>
  );
};

export { CodeEditor };
