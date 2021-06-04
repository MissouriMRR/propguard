// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState, useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import AceEditor from "react-ace";

import { HintModal } from "./hintModal";
import { Button } from "../button";
import { background, grey } from "../../constants";
import { Tutorial, Instructions } from "../../types";
import { submitAnswer } from "./submitAnswer";

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

interface Upload {
  tutorial_title: string;
  instructions: Instructions[];
}

interface InstructionsCopy {
  hint: string;
  answer: string;
  output: string;
}

const TextEditor: React.FC = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");
  const [hintModalOpen, setHintModalOpen] = useGlobal("hintModalOpen");
  const [, setShowHintAnswer] = useGlobal("showHintAnswer");
  const [tutorialName] = useGlobal("tutorialName");
  const [tutorialStep] = useGlobal("tutorialStep");
  const [output, setOutput] = useGlobal("output");
  const [uploadTextEditor, setUploadTextEditor] = useGlobal("uploadTextEditor");
  const [componentView] = useGlobal("componentView");

  const gqlData = useStaticQuery(graphql`
    query {
      allExampleGqlJson {
        nodes {
          tutorialTitle
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

  if (uploadTextEditor.length > 0) {
    for (let i = 0; i < uploadTextEditor.length; i++) {
      const instructionsArray = [];
      for (let j = 0; j < uploadTextEditor[i].instructions.length; j++) {
        const instructionsCopy = (({
          hint,
          answer,
          output
        }): InstructionsCopy => ({
          hint,
          answer,
          output
        }))(uploadTextEditor[i].instructions[j]);
        instructionsArray.push(instructionsCopy);
      }
      const uploadCopy = (({ tutorial_title, instructions }): Upload => ({
        tutorial_title,
        instructions
      }))(uploadTextEditor[i]);

      uploadCopy.instructions = instructionsArray;

      gqlData.allExampleGqlJson.nodes.push(uploadCopy);
    }

    setUploadTextEditor([]);
  }

  // We destructure the data since this query returns an array, and when
  // we use the GraphQL filter it'll end up being an array of size 1. Otherwise
  // it just picks the first element
  const data: Tutorial = gqlData.allExampleGqlJson.nodes.find(
    (tutorial: Tutorial): boolean => {
      return tutorial.tutorialTitle === tutorialName;
    }
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!userInput) return;

    setOutput({ ...output, status: "Loading" });

    const result = submitAnswer(
      userInput,
      data.instructions[tutorialStep - 1].answer
    );

    setTimeout(() => {
      if (result.correct) {
        setOutput({
          status: "Successful",
          correct: result.correct,
          message: data.instructions[tutorialStep - 1].output.successMessage,
          droneTask: data.instructions[tutorialStep - 1].output.droneRoutine
        });
      } else {
        setOutput({ ...result, status: "Error", droneTask: "" });
      }
    }, 1000);
  };

  const toggleHintModal = (): void => {
    setHintModalOpen(!hintModalOpen);
    setShowHintAnswer(false);
  };

  const handleHint = (): void => {
    if (
      componentView === "TutorialComponent" &&
      data.instructions[tutorialStep - 1].hint
    ) {
      toggleHintModal();
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
          tabSize: 4
        }}
      />
      <HintModal data={data} />
    </TerminalWrapper>
  );
};

export { TextEditor };
