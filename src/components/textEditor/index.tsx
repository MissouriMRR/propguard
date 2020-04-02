// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { background, textPrimary, grey } from "../../constants";
import { Button } from "./button";
import { LineIndicator } from "./lineIndicator";

const TerminalWrapper: AnyStyledComponent = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TerminalHeader: AnyStyledComponent = styled.div`
  height: calc(4rem - 2px);
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;
  border-top: none;
`;

const Editor: AnyStyledComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  align-items: stretch;
  overflow: auto;
`;

interface TerminalProps {
  lineCount: number;
}

const Terminal: AnyStyledComponent = styled.textarea`
  min-height: 25rem;
  height: ${(props: TerminalProps): string =>
    `${(props.lineCount * 30).toString()}px`};
  width: 100%;
  padding: 1rem 2rem 2rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background: ${background};
  border: none;
  color: ${textPrimary};
  font-family: "Source Code Pro";
  font-size: 16px;
  line-height: 1.5;
  overflow-y: hidden;
  resize: none;
  white-space: pre;

  :focus {
    outline: none;
  }
`;

// TODO: Refactor suggestbox to array in the text position instead
// FIXME: Prevent current suggestbox from shrinking when a lot
// of code is being written
const SuggestBox: AnyStyledComponent = styled.div`
  width: 100%;
  height: 4rem;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;
  border-bottom: none;

  h1 {
    font-size: 18px;
    font-weight: normal;
  }
`;

const TextEditor: React.FC = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");
  const [cursorPos, setCursorPos] = useState<number>(0);
  const [lineCount, setLineCount] = useState<number>(0);

  // TODO: Import external array containing the actual keywords
  // These are the words that we want to suggest to the user
  const words: string[] = ["drone", "python", "code"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(event.target.value);
    setCursorPos(event.target.selectionStart || 0);
  };

  const removeSuggestion = (): void => {
    setSuggestion("");
  };

  // Uses selectionStart to detect where the user's cursor position is
  // and offers a suggestion based on what the user has typed since then
  useEffect(() => {
    let text: string = userInput;
    let startIndex = 0;
    let tempIndex = 0;

    // Find the word that the user is currently on
    if (text.includes(" ") || text.includes("\n")) {
      startIndex = text.lastIndexOf(" ");
      tempIndex = text.lastIndexOf("\n");

      // If a user used a newline to start their new word, we will
      // use the inde of the newline instead
      if (tempIndex > startIndex) startIndex = tempIndex;

      if (text.length <= cursorPos) {
        text = text.substring(startIndex + 1);
      } else {
        const currentStr = text.substring(0, cursorPos);

        text = text.substring(currentStr.lastIndexOf(" ") + 1, cursorPos);
      }
    }

    // Compares the user's word with our list of suggestions
    for (let i = 0; i < words.length; i += 1) {
      setSuggestion("");
      if (
        text.length !== 0 &&
        words[i].startsWith(text) &&
        text.length !== words[i].length
      ) {
        setSuggestion(words[i]);
        break;
      }
    }

    // Update the line count
    setLineCount(userInput.split("\n").length - 1);
  }, [userInput, cursorPos, words]);

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
      <Editor>
        <LineIndicator lineCount={lineCount} />
        <Terminal
          type="text"
          onBlur={removeSuggestion}
          onChange={handleChange}
          spellCheck="false"
          placeholder="Write your code here."
          value={userInput}
          lineCount={lineCount}
        />
      </Editor>
      <SuggestBox suggestion={suggestion}>
        <h1>{suggestion}</h1>
      </SuggestBox>
    </TerminalWrapper>
  );
};

export { TextEditor };
