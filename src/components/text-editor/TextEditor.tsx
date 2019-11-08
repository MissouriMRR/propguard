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
`;

const TextEditor: React.FC = (): JSX.Element => {
  let [suggestion, setSuggestion]: any = useState("");

  let words: string[] = ["drone", "python", "code"];

  const removeSuggestion = () => {
    setSuggestion("");
  };

  const autoCompleteCheck = (txt: string) => {
    let startIndex = 0;
    if (txt.includes(" ")) {
      startIndex = txt.lastIndexOf(" ");
      txt = txt.substring(startIndex + 1);
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
      />
      <div>{suggestion}</div>
    </Main>
  );
};

export { TextEditor };
