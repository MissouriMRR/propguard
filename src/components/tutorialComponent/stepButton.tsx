import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { Icon } from "@iconify/react";
import arrowLeft from "@iconify/icons-dashicons/arrow-left-alt2";
import arrowRight from "@iconify/icons-dashicons/arrow-right-alt2";

interface StyledProps {
  hide: boolean;
}

const StyledButton: AnyStyledComponent = styled(Icon)<StyledProps>`
  visibility: ${(props): string => (props.hide ? "hidden" : "visible")};
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

  return (
    <StyledButton
      onClick={clickFunction}
      hide={hidden}
      icon={icon}
      width="2.5rem"
    >
      {next ? "Next" : "Back"}
    </StyledButton>
  );
};

export { StepButton };
