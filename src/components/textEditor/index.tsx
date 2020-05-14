// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState, useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import AceEditor from "react-ace";

import { Button } from "./button";
import { background, grey } from "../../constants";
import { Tutorial } from "../types";
import { submitAnswer } from "./submitAnswer";
import { useLocalStorage } from "../hooks/index";

import "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

const TerminalWrapper: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const TerminalHeader: AnyStyledComponent = styled.div`
  height: 4rem;
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;
  border-top: none;
`;

const TextEditor: React.FC = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");
  const [tutorialName] = useGlobal("tutorialName");
  const [output, setOutput] = useGlobal("output");

  let data = useStaticQuery(graphql`
    query {
      allExampleGqlJson {
        nodes {
          tutorial_title
          instructions {
            hint
            answer
            output {
              successMessage
              droneRoutine
            }
          }
        }
      }
    }
  `);

  const [, tutStep, ,] = useLocalStorage(data);

  // We destructure the data since this query returns an array, and when
  // we use the GraphQL filter it'll end up being an array of size 1. Otherwise
  // it just picks the first element
  data = data.allExampleGqlJson.nodes.find((tutorial: Tutorial): boolean => {
    return tutorial.tutorial_title === tutorialName;
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!userInput) return;

    setOutput({ ...output, status: "Loading" });

    const result = submitAnswer(
      userInput,
      data.instructions[tutStep - 1].answer
    );

    setTimeout(() => {
      if (result.correct) {
        setOutput({
          status: "Successful",
          correct: result.correct,
          message: data.instructions[tutStep - 1].output.successMessage,
          droneTask: data.instructions[tutStep - 1].output.droneRoutine
        });
      } else {
        setOutput({ ...result, status: "Error", droneTask: "" });
      }
    }, 1000);
  };

  const handleHint = (): void => {
    if (data.instructions[tutStep - 1].hint) {
      alert(data.instructions[tutStep - 1].hint);
    }
  };

  return (
    <TerminalWrapper>
      <TerminalHeader>
        <Button submitFunction={handleHint} text="Hint" />
        <Button submitFunction={handleSubmit} text="Run" />
      </TerminalHeader>
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
        placeholder="Write your code here."
        value={userInput}
        onChange={(value: string): void => {
          setUserInput(value);
        }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          tabSize: 2
        }}
      />
    </TerminalWrapper>
  );
};

export { TextEditor };
