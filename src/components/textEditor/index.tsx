// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { accent, background, textPrimary, grey } from "../../constants";

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
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;
`;

const Editor: AnyStyledComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
`;

const NumberStrip: AnyStyledComponent = styled.div`
  height: calc(100vh - 8rem);
  width: 2rem;
  padding: 1rem 0;

  p {
    margin: 0;
    color: ${grey};
    line-height: 1.5;
    text-align: right;
    width: 1.5rem;
  }
`;

const Terminal: AnyStyledComponent = styled.textarea`
  height: calc(100vh - 8rem);
  width: 100%;
  padding: 1rem 2rem 2rem 0;
  background: ${background};
  border: none;
  color: ${textPrimary};
  font-family: "Source Code Pro";
  font-size: 16px;
  line-height: 1.5;
  resize: none;

  :focus {
    outline: none;
  }
`;

const Button: AnyStyledComponent = styled.button`
  height: 2.5rem;
  width: 6rem;
  background-color: ${accent};
  border-radius: 5px;
  border-style: none;
  font-size: 18px;
`;

const SuggestBox: AnyStyledComponent = styled.div`
  width: 100%;
  height: 4rem;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;

  h1 {
    font-size: 18px;
    font-weight: normal;
  }
`;

const TextEditor: React.FC = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");
  const [cursorPos, setCursorPos] = useState<number>(0);

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
  }, [userInput, cursorPos, words]);

  // TODO: Make number generation based off of the amount of lines in
  // the final answer.
  const numberIndicators = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(element => {
    return <p key={element}>{element}</p>;
  });

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
        <Button onClick={handleSubmit}>Run</Button>
      </TerminalHeader>
      <Editor>
        <NumberStrip>{numberIndicators}</NumberStrip>
        <Terminal
          type="text"
          onBlur={removeSuggestion}
          onChange={handleChange}
          spellCheck="false"
          placeholder="Type in anything you want to your heart’s content. Text wrapping is included too!"
          value={userInput}
        />
      </Editor>
      <SuggestBox suggestion={suggestion}>
        <h1>{suggestion}</h1>
      </SuggestBox>
    </TerminalWrapper>
  );
};

export { TextEditor };
