import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface StyledProps {
  next: boolean;
  hide: boolean;
}

const StyledButton: AnyStyledComponent = styled.button<StyledProps>`
  height: 2.5rem;
  width: 6rem;
  background-color: ${(props): string => (props.next ? "#87C5FF" : "#C5C5C5")};
  border: none;
  border-radius: 5px;
  font-size: 18px;
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

  useEffect(() => {
    if (next && tutorialStep === totalSteps) setHidden(true);
    else if (!next && tutorialStep === 1) setHidden(true);
    else setHidden(false);
  });

  return (
    <StyledButton onClick={clickFunction} next={next} hide={hidden}>
      {next ? "Next" : "Back"}
    </StyledButton>
  );
};

export { StepButton };
