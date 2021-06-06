import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Modal from "react-modal";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify/icons-mdi/close";

import { Button } from "../button";
import { accent, outputError } from "../../constants";

const CloseButton: AnyStyledComponent = styled(Icon)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledModalHeader = styled.h1`
  font-size: 24px;
`;

const StyledCloseButtons = styled.div`
  & > * {
    margin-right: 1rem;
  }
`;

interface HintModalProps {
  isOpen: boolean;
  closeModal: () => void;
  discardFunction: () => void;
  exportFunction: () => void;
}

const DiscardModal: React.FC<HintModalProps> = ({
  isOpen,
  closeModal,
  discardFunction,
  exportFunction
}): JSX.Element => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // This modal library doesn't play well with regular styled components
      style={{
        content: {
          backgroundColor: "#262626",
          color: "#ffffff",
          width: 500,
          height: 200,
          padding: "2rem",
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

      <StyledModalHeader>
        Warning, you are about to Discard your progress!
      </StyledModalHeader>

      <StyledCloseButtons>
        <Button
          backgroundColor={outputError}
          text="Discard"
          submitFunction={discardFunction}
        />
        <Button
          backgroundColor={accent}
          width="10rem"
          text="Save and export"
          submitFunction={exportFunction}
        />
      </StyledCloseButtons>
    </Modal>
  );
};

export { DiscardModal };
