import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Navbar } from "../components/navbar";
import "../components/app/normalize.css";

import { background, grey } from "../constants";

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
  padding: 20px;
`;

const StyledTextInput: AnyStyledComponent = styled.div`
  height: 80px;
  width: 536px;
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;
const StyledTextBox: AnyStyledComponent = styled.input`
  height: 46px;
  width: 100%;
  color: white;
  background: grey;
`;

const EditorPage = (): JSX.Element => {
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
                <form>
                  <label>
                    Step Title: <br />
                  </label>
                  <StyledTextBox type="text" placeholder="Step Title" />
                </form>
              </StyledTextInput>
              <StyledTextInput>
                <form>
                  <label>
                    Hint: <br />
                  </label>
                  <StyledTextBox type="text" placeholder="Hint" />
                </form>
              </StyledTextInput>
              <StyledTextInput>
                <form>
                  <label>
                    Success Message: <br />
                  </label>
                  <StyledTextBox type="text" placeholder="Success Message" />
                </form>
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

export default EditorPage;
