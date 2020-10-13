import React, { useState, useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Modal from "react-modal";

import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import clipboardCopy from "@iconify/icons-heroicons-solid/clipboard-copy";
import { textPrimary } from "../../constants";
import { Tutorial } from "../types";

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

const HintModal: React.FC = (): JSX.Element => {
  const [hintModalOpen, setHintModalOpen] = useGlobal("hintModalOpen");
  const [showHintAnswer, setShowHintAnswer] = useState<boolean>(false);
  const [tutorialName] = useGlobal("tutorialName");
  const [tutorialStep] = useGlobal("tutorialStep");

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

  const toggleHintModal = (): void => {
    setHintModalOpen(!hintModalOpen);
    setShowHintAnswer(false);
  };

  const toggleHintAnswer = (): void => {
    setShowHintAnswer(!showHintAnswer);
  };

  const copyToClipboard = (arr: string[]): void => {
    const el = document.createElement("textarea");
    el.value = "";
    for (let i = 0; i < arr.length; i += 1) {
      el.value += `${arr[i]}\n`;
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
      <div
        role="button"
        tabIndex={0}
        onClick={toggleHintModal}
        onKeyDown={toggleHintModal}
      >
        <CloseButton icon={closeIcon} />
      </div>
      <HintBody>
        {data.instructions[tutorialStep - 1].hint}

        <HintAnswerButton onClick={toggleHintAnswer}>
          {showHintAnswer ? "Hide Answer" : "Show Answer"}
        </HintAnswerButton>
      </HintBody>

      <HintAnswer style={{ display: showHintAnswer ? "block" : "none" }}>
        {data.instructions[tutorialStep - 1].answer.map((value: string) => {
          return <pre key={value}>{value}</pre>;
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
  );
};

export { HintModal };
