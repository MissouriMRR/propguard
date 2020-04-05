/* eslint react/jsx-one-expression-per-line: 0 */
import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import "./normalize.css"; // Normalize CSS styles across all browsers

import { Navbar } from "../navbar";
import { TextEditor } from "../textEditor";
import { TutorialDisplay } from "../tutorialComponent";
import { background, textPrimary, grey } from "../../constants";

const StyledTutorialPage: AnyStyledComponent = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  background: ${background};
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
  border: 1px solid ${grey};
  border-left: none;
  border-collapse: collapse;
  height: 100%;
  width: 33.3%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: ${textPrimary};

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TutorialApp: React.FC = (): JSX.Element => {
  const [tutorialStep, setTutorialStep] = useGlobal("tutorialStep");

  return (
    <StyledTutorialPage>
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
    </StyledTutorialPage>
  );
};

export { TutorialApp };
