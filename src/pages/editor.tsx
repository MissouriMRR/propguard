import React, { useState } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import AceEditor from "react-ace";
import { Navbar } from "../components/navbar";
import { Button } from "../components/textEditor/button";
import "../components/app/normalize.css";

import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

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

const StepContentBody: AnyStyledComponent = styled.div`
  padding: 40px;
`;

const StepContentList: AnyStyledComponent = styled.div``;

interface ContentBlock {
  type: string;
  value: string;
}

const EditorPage = (): JSX.Element => {
  const [content] = useState([
    {
      type: "text",
      value: "Lorem epsum."
    },
    {
      type: "text",
      value: "Lorem epsum."
    }
  ]);

  const addBlock = (): void => {
    console.log("block added");
  };

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
            <StepContentBody>
              <StepContentList>
                {content.map((value: ContentBlock) => {
                  return <div key={value.toString()}>{value.value}</div>;
                })}
              </StepContentList>
              <Button submitFunction={addBlock} text="Add Block" />
            </StepContentBody>
          </StyledLeftHalf>

          <StyledRightHalf>
            <StyledTitle>
              <h3>Code Solution</h3>
            </StyledTitle>
            <AceEditor
              style={{
                position: "relative",
                marginTop: "1%",
                height: "90%",
                width: "99.9%",
                backgroundColor: background,
                fontFamily: "Source Code Pro"
              }}
              fontSize="16px"
              mode="python"
              theme="tomorrow_night_eighties"
              placeholder="Write your code solution here."
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 4
              }}
            />
          </StyledRightHalf>
        </MainWrapper>
      </StyledEditor>
    </MainWrapper>
  );
};

export default EditorPage;
