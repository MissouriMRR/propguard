/* eslint react/jsx-one-expression-per-line: 0 */
import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import "./normalize.css"; // Normalize CSS styles across all browsers

import { Navbar } from "../navbar";
import { TextEditor } from "../textEditor";
import { TutorialDisplay } from "../tutorialComponent";

const StyledTutorialPage: AnyStyledComponent = styled.div`
  height: 100vh;
  width: 100vw;
  background: #dce1ee;
  display: flex;
  flex-direction: column;
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
  const [step, setStep] = useGlobal("step");

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
          <h3 className="text-center">Output will go here</h3>
          <button
            type="button"
            onClick={(): Promise<{ step: number }> => setStep(step + 1)}
          >
            {step}: Click to increase
          </button>
        </Column>
      </MainWrapper>
    </StyledTutorialPage>
  );
};

export { TutorialApp };
