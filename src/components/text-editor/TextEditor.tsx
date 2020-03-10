// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { checkInput } from "../../utils/check_input";
import answerData from "../../utils/correct_example.json";

const TerminalWrapper: AnyStyledComponent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 70%;
`;

const Terminal: AnyStyledComponent = styled.textarea`
  height: 75%;
  width: 66%;
  margin: 0;
  padding: 2rem;
  overflow: auto;
  border: none;
  margin: 0 0 10px 0;
  resize: none;
  font-size: 16px;

  :focus {
    outline: none;
  }
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

const SuggestBox: AnyStyledComponent = styled.div`
  height: 50px;
  margin: 0 0 10px 0;
  max-width: 80%;

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
      // use the index of the newline instead
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Don't submit if there's nothing in the terminal
    if (!userInput) return;

    // TODO: Placeholder alert. Replace this when we get global state working
    console.log(checkInput(userInput, answerData[0].answers));
  };

  return (
    <TerminalWrapper>
      <Terminal
        type="text"
        onBlur={removeSuggestion}
        onChange={handleChange}
        spellCheck="false"
        placeholder="Type in anything you want to your heart’s content. Text wrapping is included too!"
        value={userInput}
      />
      <SuggestBox>
        <h1>{suggestion}</h1>
      </SuggestBox>
      <Button onClick={handleSubmit}>Run</Button>
    </TerminalWrapper>
  );
};

export { TextEditor };
