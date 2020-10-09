// Custon ESlint rule overide fixes a conflict between ESlint and Prettier
// rules on a certain weird indentation edge case on line 74-76. on var input
/* eslint @typescript-eslint/indent: 0 */
import React, { useState, useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import AceEditor from "react-ace";
import Modal from "react-modal";

import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import clipboardCopy from "@iconify/icons-heroicons-solid/clipboard-copy";
import { Button } from "./button";
import { background, grey, textPrimary } from "../../constants";
import { Tutorial } from "../types";
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

const CloseButton: AnyStyledComponent = styled(Icon)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const HintBody: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const HintAnswer: AnyStyledComponent = styled.div`
  display: block;
  background-color: #eff0f1;
  color: #262626;
  padding: 1.5rem;
  border-radius: 5px;
  margin-top: 20px;
`;

const HintAnswerButton: AnyStyledComponent = styled.button`
  height: 2.5rem;
  width: 8rem;
  background: #262626;
  border: 2px solid #e9e9e9;
  border-radius: 1px;
  color: ${textPrimary};
  font-size: 16px;
  font-weight: 600;
  outline: none;
  margin-top: 20px;

  &:hover {
    background-color: #727272;
    cursor: pointer;
  }
`;

const Copy: AnyStyledComponent = styled(Icon)`
  font-size: 30px;
  position: absolute;
  top: 150px;
  right: 23px;

  &:hover {
    cursor: pointer;
  }
`;

const TextEditor: React.FC = (): JSX.Element => {
  const [userInput, setUserInput] = useState<string>("");
  const [hintModalOpen, setHintModalOpen] = useState<boolean>(false);
  const [showHintAnswer, setShowHintAnswer] = useState<boolean>(false);
  const [tutorialName] = useGlobal("tutorialName");
  const [tutorialStep] = useGlobal("tutorialStep");
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
    if (data.instructions[tutorialStep - 1].hint) {
      toggleHintModal();
    }
  };

  const toggleHintAnswer = (): void => {
    setShowHintAnswer(!showHintAnswer);
  };

  const copyToClipboard = (arr: string[]): void => {
    const el = document.createElement("textarea");
    el.value = "";
    for (let i = 0; i < arr.length; i++) {
      el.value += arr[i] + "\n";
    }
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
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
      <Modal
        isOpen={hintModalOpen}
        onRequestClose={toggleHintModal}
        style={{
          content: {
            backgroundColor: "#262626",
            color: "#ffffff",
            width: 450,
            height: 350,
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)"
          },
          overlay: {
            zIndex: 100
          }
        }}
        ariaHideApp={false}
      >
        <a onClick={toggleHintModal}>
          <CloseButton icon={closeIcon} />
        </a>
        <HintBody>
          {data.instructions[tutorialStep - 1].hint}

          <HintAnswerButton onClick={toggleHintAnswer}>
            {showHintAnswer ? "Hide Answer" : "Show Answer"}
          </HintAnswerButton>
        </HintBody>

        <HintAnswer style={{ display: showHintAnswer ? "block" : "none" }}>
          {data.instructions[tutorialStep - 1].answer.map((value: string) => {
            return <pre>{value}</pre>;
          })}
          <div title="Copy to Clipboard">
            <Copy
              icon={clipboardCopy}
              onClick={(): void => {
                copyToClipboard(data.instructions[tutorialStep - 1].answer);
              }}
            />
          </div>
        </HintAnswer>
      </Modal>
    </TerminalWrapper>
  );
};

export { TextEditor };
