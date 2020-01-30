// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Main: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const Terminal: AnyStyledComponent = styled.form`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 70%;
`;

const Text: AnyStyledComponent = styled.textarea`
  margin: 0;
  border-radius: 5px;
  border-style: none;
  height: 75%;
  margin: 0 0 10px 0;
  resize: none;
  width: 80%;
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
  const [suggestion, setSuggestion] = useState<string>("");

  // TODO: Import external array containing the actual keywords
  // These are the words that we want to suggest to the user
  const words: string[] = ["drone", "python", "code"];

  // We are using uncontrolled method of creating Forms in React, so we go
  // ahead and set this variable to the content inside of the terminal
  const input: React.RefObject<HTMLTextAreaElement> = React.createRef<
    HTMLTextAreaElement
  >();

  const removeSuggestion = (): void => {
    setSuggestion("");
  };

  // Uses selectionStart to detect where the user's cursor position is
  // and offers a suggestion based on what the user has typed since then
  const autoCompleteCheck = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let text: string = event.target.value;
    const cursorPos = event.target.selectionStart || 0;
    let startIndex = 0;

    // Determines which word we want to offer a suggestion for
    if (event.target.value.includes(" ")) {
      startIndex = event.target.value.lastIndexOf(" ");

      if (event.target.value.length <= cursorPos) {
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
        words[i].startsWith(text) &&
        text.length !== words[i].length &&
        text.length !== 0
      ) {
        setSuggestion(words[i]);
        break;
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // Don't submit if there's nothing in the terminal
    if (!input.current) return;

    // TODO: Placeholder alert. Replace this when we get global state working
    alert(`Hi, you submitted: ${input.current.value}`);
  };

  return (
    <Main>
      <Terminal
        onSubmit={(event: React.FormEvent<HTMLFormElement>): void =>
          handleSubmit(event)
        }
      >
        <Text
          type="text"
          onBlur={removeSuggestion}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            autoCompleteCheck(event);
            console.log(event.type);
          }}
          spellCheck="false"
          placeholder="Type in anything you want to your heart’s content. Text wrapping is included too!"
          ref={input}
        />
        <SuggestBox>
          <h1>{suggestion}</h1>
        </SuggestBox>
        <Button type="submit">Run</Button>
      </Terminal>
    </Main>
  );
};

export { TextEditor };
