import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { TextEditor } from "../text-editor/TextEditor";
import { Output } from "../output/Output";

import { Navbar } from "../navbar/Navbar";

import { TutorialDisplay } from "../tutorial-display/TutorialDisplay";

const TutorialPage: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainWrapper: AnyStyledComponent = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: none;
  flex: 1;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column: AnyStyledComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 33%;
  color: black;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TutorialApp: React.FC = (): JSX.Element => {
  return (
    <TutorialPage>
      <Navbar />
      <MainWrapper>
        <Column>
          <TutorialDisplay />
        </Column>
        <Column>
          <TextEditor />
        </Column>
        <Column>
          <Output />
        </Column>
      </MainWrapper>
    </TutorialPage>
  );
};

export { TutorialApp };
