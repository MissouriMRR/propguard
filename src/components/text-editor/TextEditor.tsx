import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Main: AnyStyledComponent = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
`;

const Text: AnyStyledComponent = styled.textarea`
  margin-top: 20px;
  width: 75%;
  height: 90%;
  border-radius: 5px;
  resize: none;
  border: none;

  :focus {
    outline: none;
  }
`;

const Button: AnyStyledComponent = styled.button`
  position: relative;
  bottom: 100px;
  width: 100px;

  @media only screen and (max-width: 800px) {
    bottom: 60px;
  }
`;

const TextEditor: React.FC = (): JSX.Element => {
  let [suggestion, setSuggestion]: any = useState("");

  let words: string[] = ["drone", "python", "code"];

  const removeSuggestion = () => {
    setSuggestion("");
  };

  const autoCompleteCheck = (txt: string) => {
    let startIndex = 0;
    let terminal: any = document.getElementById("terminal");
    if (txt.includes(" ")) {
      startIndex = txt.lastIndexOf(" ");
      if (terminal.value.length <= terminal.selectionStart) {
        txt = txt.substring(startIndex + 1);
      } else {
        let currentStr = txt.substring(0, terminal.selectionStart);
        txt = txt.substring(
          currentStr.lastIndexOf(" ") + 1,
          terminal.selectionStart
        );
      }
    }

    for (let i = 0; i < words.length; i++) {
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
      <Text
        type="text"
        onBlur={removeSuggestion}
        onChange={(event: any) => autoCompleteCheck(event.target.value)}
        spellCheck="false"
        id="terminal"
        placeholder="Type in anything you want to your heart’s content. Text wrapping is included too!"
      />
      <div>{suggestion}</div>
      <Button className="btn btn-success">Run</Button>
    </Main>
  );
};

export { TextEditor };
