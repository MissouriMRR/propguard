import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { HintInput } from "./hintInput";
import { Navbar } from "../navbar";
import "../app/normalize.css";

import { background, grey } from "../../constants";

const StyledEditor: AnyStyledComponent = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: stretch;
  background: ${background};
  overflow: auto;
`;

const MainWrapper: AnyStyledComponent = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: none;
  flex: 1;
`;

const StyledHeader: AnyStyledComponent = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid ${grey};
  border-left: none;
  border-bottom: none;
`;

const StyledTitle: AnyStyledComponent = styled.div`
  height: 42px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: stretch;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;
`;

const StyledLeftHalf: AnyStyledComponent = styled.div`
  height: 100%;
  width: 50%;
  color: white;
  border-right: 1px solid ${grey};
`;

const StyledRightHalf: AnyStyledComponent = styled.div`
  height: 100%;
  width: 50%;
  color: white;
  border-right: 1px solid ${grey};
`;

const StyledStepNav: AnyStyledComponent = styled.div`
  height: 100%;
  width: 75px;
  color: white;
  border-bottom: 1px solid ${grey};
  border-right: 1px solid ${grey};
  border-top: 1px solid ${grey};
`;

const StyledStepSection: AnyStyledComponent = styled.div`
  height: 40%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
`;

const StyledTextInput: AnyStyledComponent = styled.div`
  height: 80px;
  width: 100%;
  color: white;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
`;

const StyledLabel: AnyStyledComponent = styled.label`
  color: white;
  width: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
`;

const TutEditor: React.FC = (): JSX.Element => {
  return (
    <MainWrapper>
      <Navbar />
      <StyledEditor>
        <StyledHeader>
          <h2>Tutorial Editor</h2>
        </StyledHeader>
        <MainWrapper>
          <StyledStepNav />
          <StyledLeftHalf>
            <StyledTitle>
              <h3>Step</h3>
            </StyledTitle>
            <StyledStepSection>
              <StyledTextInput>
                <StyledLabel>Step Title:</StyledLabel>
                <HintInput placeholder="Step Title" />
              </StyledTextInput>
              <StyledTextInput>
                <StyledLabel>Hint:</StyledLabel>
                <HintInput placeholder="Hint" />
              </StyledTextInput>
              <StyledTextInput>
                <StyledLabel>Success Message:</StyledLabel>
                <HintInput placeholder="Success Message" />
              </StyledTextInput>
            </StyledStepSection>
            <StyledTitle>
              <h3>Step Content</h3>
            </StyledTitle>
          </StyledLeftHalf>

          <StyledRightHalf>
            <StyledTitle>
              <h3>Code Solution</h3>
            </StyledTitle>
          </StyledRightHalf>
        </MainWrapper>
      </StyledEditor>
    </MainWrapper>
  );
};

export { TutEditor };
