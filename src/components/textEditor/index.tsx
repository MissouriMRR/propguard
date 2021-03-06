// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState, useGlobal } from "reactn";
import { useStaticQuery, graphql } from "gatsby";
import styled, { AnyStyledComponent } from "styled-components";

import { HintModal } from "./hintModal";
import { Button } from "../button";
import { CodeEditor } from "../codeEditor";
import { Tutorial } from "../../types";
import { submitAnswer } from "./submitAnswer";
import { accent, grey } from "../../constants";

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
  const [hintModalOpen, setHintModalOpen] = useGlobal("hintModalOpen");
  const [, setShowHintAnswer] = useGlobal("showHintAnswer");
  const [tutorialName] = useGlobal("tutorialName");
  const [tutorialStep] = useGlobal("tutorialStep");
  const [outputResult, setOutputResult] = useGlobal("output");
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

  // We destructure the data since this query returns an array, and when
  // we use the GraphQL filter it'll end up being an array of size 1. Otherwise
  // it just picks the first element
  const tutorialData: Tutorial = gqlData.allExampleGqlJson.nodes.find(
    (tutorial: Tutorial): boolean => {
      return tutorial.tutorialTitle === tutorialName;
    }
  );

  if (!tutorialData) {
    return <p>Loading...</p>;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!userInput) return;

    setOutputResult({ ...outputResult, status: "Loading" });

    const result = submitAnswer(
      userInput,
      tutorialData.instructions[tutorialStep - 1].answer
    );

    setTimeout(() => {
      if (result.correct) {
        setOutputResult({
          status: "Successful",
          correct: result.correct,
          message:
            tutorialData.instructions[tutorialStep - 1].output.successMessage,
          droneTask:
            tutorialData.instructions[tutorialStep - 1].output.droneRoutine
        });
      } else {
        setOutputResult({ ...result, status: "Error", droneTask: "" });
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
      tutorialData.instructions[tutorialStep - 1].hint
    ) {
      toggleHintModal();
    }
  };

  return (
    <TerminalWrapper>
      <TerminalHeader>
        <Button submitFunction={handleHint} text="Hint" />
        <Button
          backgroundColor={accent}
          submitFunction={handleSubmit}
          text="Run"
        />
      </TerminalHeader>
      <CodeEditor
        value={userInput}
        onChange={(value: string): void => setUserInput(value)}
      />
      <HintModal data={tutorialData} />
    </TerminalWrapper>
  );
};

export { TextEditor };
