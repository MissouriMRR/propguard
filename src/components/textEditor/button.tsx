import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { accent, background, textPrimary } from "../../constants";

interface StyledProps {
  text: string;
}

const StyledButton: AnyStyledComponent = styled.button`
  height: 2.5rem;
  width: 8rem;
  background: ${(props: StyledProps): string =>
    props.text === "Run" ? accent : background};
  border: 2px solid #e9e9e9;
  border-radius: 1px;
  color: ${textPrimary};
  font-size: 20px;
  font-weight: 600;
  outline: none;

  &:hover {
    background-color: rgba(256, 256, 256, 0.2);
  }

  &:active {
    height: 2rem;
  }
`;

interface ButtonProps {
  text: string;
  submitFunction: Function;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const { text, submitFunction } = props;

  return (
    <StyledButton onClick={submitFunction} text={text}>
      {text}
    </StyledButton>
  );
};

export { Button };
