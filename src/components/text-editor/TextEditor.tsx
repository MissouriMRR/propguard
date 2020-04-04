// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";

const TerminalWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Button: AnyStyledComponent = styled.button`
  background-color: #90c577;
  border-radius: 5px;
  border-style: none;
  height: 43px;
  width: 98px;
  font-size: 18px;
  margin: 10px 0 2rem 0;

  @media only screen and (max-width: 800px) {
    bottom: 60px;
  }
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
      <AceEditor
        style={{ height: "100%" }}
        mode="python"
        theme="monokai"
        placeholder="Type in anything you want to your heart’s content. Text wrapping is included too!"
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
      <Button onClick={handleSubmit}>Run</Button>
    </TerminalWrapper>
  );
};

export { TextEditor };
