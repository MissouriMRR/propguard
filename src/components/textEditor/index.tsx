// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import AceEditor from "react-ace";
import { background, grey } from "../../constants";
import { Button } from "./button";

import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

const TerminalWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TerminalHeader: AnyStyledComponent = styled.div`
  height: 4rem;
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;
  border-top: none;
`;

const TextEditor: React.FC = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Don't submit if there's nothing in the terminal
    if (!userInput) return;

    // TODO: Placeholder alert. Replace this when we get global state working
    alert(`Hi, you submitted: ${userInput}`);
  };

  return (
    <TerminalWrapper>
      <TerminalHeader>
        <Button submitFunction={handleSubmit} text="Hint" />
        <Button submitFunction={handleSubmit} text="Run" />
      </TerminalHeader>
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
        placeholder="Write your code here."
        value={userInput}
        onChange={(value: string): void => {
          setUserInput(value);
        }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          tabSize: 2
        }}
      />
    </TerminalWrapper>
  );
};

export { TextEditor };
