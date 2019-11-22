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

const Wrapper: AnyStyledComponent = styled.div`
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

  const removeSuggestion = () => {
    setSuggestion("");
  };

  const autoCompleteCheck = (txt: string): void => {
    let startIndex = 0;

    const terminal: any = document.getElementById("terminal");
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

  return (
    <Main>
      <Wrapper>
        <Text
          type="text"
          onBlur={removeSuggestion}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            autoCompleteCheck(event.target.value)}
          spellCheck="false"
          id="terminal"
          placeholder="Type in anything you want to your heart’s content. Text wrapping is included too!"
        />
        <SuggestBox>
          <h1>{suggestion}</h1>
        </SuggestBox>
        <Button>Run</Button>
      </Wrapper>
    </Main>
  );
};

export { TextEditor };
