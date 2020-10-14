import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import Modal from "react-modal";

import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import clipboardCopy from "@iconify/icons-heroicons-solid/clipboard-copy";
import { textPrimary } from "../../constants";
import { Tutorial } from "../types/index";

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

interface HintModalProps {
  data: Tutorial;
}

const HintModal: React.FC<HintModalProps> = (props): JSX.Element => {
  const [hintModalOpen, setHintModalOpen] = useGlobal("hintModalOpen");
  const [showHintAnswer, setShowHintAnswer] = useGlobal("showHintAnswer");
  const [tutorialStep] = useGlobal("tutorialStep");

  const { data } = props;

  const toggleHintModal = (): void => {
    setHintModalOpen(!hintModalOpen);
    setShowHintAnswer(false);
  };

  const toggleHintAnswer = (): void => {
    setShowHintAnswer(!showHintAnswer);
  };

  const copyToClipboard = (arr: string[]): void => {
    // Create invisible textarea element with text from arr
    const el = document.createElement("textarea");
    el.value = "";
    for (let i = 0; i < arr.length; i += 1) {
      el.value += `${arr[i]}\n`;
    }
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);

    // Select and copy text to clipboard
    el.select();
    document.execCommand("copy");

    // Remove textarea element from DOM
    document.body.removeChild(el);
  };

  return (
    <Modal
      isOpen={hintModalOpen}
      onRequestClose={toggleHintModal}
      // Inline react-modal styles
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
