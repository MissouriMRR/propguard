/*
  Custom ESlint rule overrides specifically for this file.
  TODO: Write aobut first rule 
  Second ESlint rule overide fixes a conflict between ESlint and Typescript
  with a certain weird indentation edge case
*/
/* eslint no-param-reassign: 0 */
/* eslint @typescript-eslint/indent: 0 */
import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Main: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  height: 80%;
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

  @media only screen and (max-width: 800px) {
    bottom: 60px;
  }
`;

const SuggestBox: AnyStyledComponent = styled.div`
  height: 50px;
  margin: 0 0 10px 0;
  max-width: 80%;

  h1 {
    font-size: 16px;
    font-weight: normal;
  }
`;

const TextEditor: React.FC = (): JSX.Element => {
  const [suggestion, setSuggestion] = useState<string>("");

  const words: string[] = ["drone", "python", "code"];

  const input: React.RefObject<HTMLTextAreaElement> = React.createRef<
    HTMLTextAreaElement
  >();

  const removeSuggestion = (): void => {
    setSuggestion("");
  };

  const autoCompleteCheck = (txt: string): void => {
    let startIndex = 0;

    // FIXME: Find the right type on this. The HTMLTextAreaElement type
    // still returns an error
    const terminal: any = document.getElementById("terminal");

    if (terminal === null) return; // Don't run autocomplete on empty terminal

    if (txt.includes(" ")) {
      startIndex = txt.lastIndexOf(" ");

      if (terminal.value.length <= terminal.selectionStart) {
        txt = txt.substring(startIndex + 1);
      } else {
        const currentStr = txt.substring(0, terminal.selectionStart);
        txt = txt.substring(
          currentStr.lastIndexOf(" ") + 1,
          terminal.selectionStart
        );
      }
    }

    for (let i = 0; i < words.length; i += 1) {
      setSuggestion("");
      if (
        words[i].startsWith(txt) &&
        txt.length !== words[i].length &&
        txt.length !== 0
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            autoCompleteCheck(event.target.value)
          }
          spellCheck="false"
          id="terminal"
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
