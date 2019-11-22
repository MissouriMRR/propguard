import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { TextEditor } from "../text-editor/TextEditor";
import { TutorialDisplay } from "../tutorial-display/index";

const Parent: AnyStyledComponent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: none;
  justify-content: center;
  align-items: center;
  height: 90%;
  margin-top: 100px;
  flex: 1;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Column: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
  color: black;
  height: 100%;

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 33%;
  }
`;

const TutorialApp: React.FC = (): JSX.Element => {
  return (
    <Parent>
      <Column>
        <TutorialDisplay />
      </Column>
      <Column>
        <TextEditor />
      </Column>
      <Column>
        <h3 className="text-center">Output will go here</h3>
      </Column>
    </Parent>
  );
};

export { TutorialApp };
