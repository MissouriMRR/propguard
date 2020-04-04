import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import { Navbar } from "../navbar/Navbar";
// import { TextEditor } from "../text-editor/TextEditor";
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

  @media only screen and (max-width: 800px) {
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

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 33%;
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
          {/* <TextEditor /> */}
          <AceEditor mode="python" theme="monokai" />
        </Column>
        <Column>
          <h3 className="text-center">Output will go here</h3>
        </Column>
      </MainWrapper>
    </TutorialPage>
  );
};

export { TutorialApp };
