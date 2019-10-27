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
  let [text, setText]: any = useState("");

  return (
    <Main>
      <Text
        type="text"
        value={text}
        onChange={(event: any) => setText(event.target.value)}
      />
    </Main>
  );
};

export { TextEditor };
