import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { TextEditor } from "../text-editor/TextEditor";
import { Output } from "../output/Output";

const Parent: AnyStyledComponent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  height: 100%;
  background-color: #dce1ee;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column: AnyStyledComponent = styled.div`
  width: 33%;
  color: black;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 33%;
  }
`;

const TutorialApp: React.FC = (): JSX.Element => {
  return (
    <Parent>
      <Column>
        <h3 className="text-center">Tutorials will go here</h3>
      </Column>
      <Column>
        <TextEditor />
      </Column>
      <Column className="text-center">
        <Output />
      </Column>
    </Parent>
  );
};

export { TutorialApp };
