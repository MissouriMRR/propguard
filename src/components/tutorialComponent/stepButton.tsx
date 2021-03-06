import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Icon } from "@iconify/react";
import arrowLeft from "@iconify/icons-dashicons/arrow-left-alt2";
import arrowRight from "@iconify/icons-dashicons/arrow-right-alt2";

interface StyledProps {
  hidden: boolean;
}

const StyledButton: AnyStyledComponent = styled(Icon)<StyledProps>`
  font-size: 2.5rem;
  display: block;
  visibility: ${(props): string => (props.hidden ? "hidden" : "visible")};

  &:hover {
    filter: invert(58%) sepia(81%) saturate(2820%) hue-rotate(173deg)
      brightness(90%) contrast(90%);
    cursor: pointer;
  }

  &:active {
    padding: 0.25rem;
  }
`;

interface ButtonProps {
  clickFunction: Function;
  next: boolean;
  tutorialStep: number;
  totalSteps: number;
}

const StepButton: React.FC<ButtonProps> = (props): JSX.Element => {
  const { next, tutorialStep, clickFunction, totalSteps } = props;
  const [hidden, setHidden] = useState(true);
  const icon = next ? arrowRight : arrowLeft;

  useEffect(() => {
    if (next && tutorialStep === totalSteps) setHidden(true);
    else if (!next && tutorialStep === 1) setHidden(true);
    else setHidden(false);
  });

  return <StyledButton onClick={clickFunction} hidden={hidden} icon={icon} />;
};

export { StepButton };
