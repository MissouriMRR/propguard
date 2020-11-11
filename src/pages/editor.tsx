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
  border-left: 1px solid ${grey};
  border-right: 1px solid ${grey};
`;

const StyledStepNav: AnyStyledComponent = styled.div`
  height: 100%;
  width: 75px;
  color: white;
  border-bottom: 1px solid ${grey};
  border-right: 1px solid ${grey};
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
