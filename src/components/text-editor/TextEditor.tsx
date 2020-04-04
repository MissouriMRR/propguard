// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-monokai";

const TerminalWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button: AnyStyledComponent = styled.button`
  background-color: #90c577;
  border-radius: 5px;
  border-style: none;
  height: 43px;
  width: 98px;
  font-size: 18px;
  margin: 0 0 2rem 0;

  @media only screen and (max-width: 800px) {
    bottom: 60px;
  }
`;

const TextEditor: React.FC = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");

  // TODO: Import external array containing the actual keywords
  // These are the words that we want to suggest to the user
  // const words: string[] = ["drone", "python", "code"];

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
          enableSnippets: true
        }}
      />
      <Button onClick={handleSubmit}>Run</Button>
    </TerminalWrapper>
  );
};

export { TextEditor };
