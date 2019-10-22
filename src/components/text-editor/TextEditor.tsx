import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const TextEditor: React.FC = (): JSX.Element => {
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
  `;

  return (
    <Main>
      <Text />
    </Main>
  );
};

export { TextEditor };
