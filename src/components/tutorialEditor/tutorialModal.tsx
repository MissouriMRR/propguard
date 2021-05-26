import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import Modal from "react-modal";

import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";
import { textPrimary } from "../../constants";

const CloseButton: AnyStyledComponent = styled(Icon)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledLabel = styled.h1`
  font-size: 18px;
`;

const StyledInput = styled.input`
  margin-bottom: 1rem;
`;

const StyledTextArea = styled.textarea``;

interface HintModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

// TODO: Style component
const TutorialModal: React.FC<HintModalProps> = ({
  isOpen,
  closeModal
}): JSX.Element => {
  const [editorState, setEditorState] = useGlobal("editorState");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // Styled Components are difficult/infeasible to implement since the style prop for this modal library doesn't reflect the behavior of a regular style prop
      style={{
        content: {
          backgroundColor: "#262626",
          color: "#ffffff",
          width: 450,
          height: 250,
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
        onClick={closeModal}
        onKeyDown={closeModal}
      >
        <CloseButton icon={closeIcon} />
      </div>

      <StyledLabel>Tutorial Title</StyledLabel>
      <StyledInput
        type="text"
        value={editorState.selectedTutorial}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setEditorState({ ...editorState, selectedTutorial: e.target.value });
        }}
      />

      <StyledLabel>Tutorial Description</StyledLabel>
      <StyledTextArea
        value={editorState.selectedTutorialDesc}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
          setEditorState({
            ...editorState,
            selectedTutorialDesc: e.target.value
          });
        }}
      />
    </Modal>
  );
};

export { TutorialModal };
