import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { background, textPrimary } from "../../constants";

interface StyledProps {
  backgroundColor?: string;
  width?: string;
}

const StyledButton: AnyStyledComponent = styled.button<StyledProps>`
  height: 2.5rem;
  width: ${(props): string => (props.width ? props.width : "8rem")};
  background: ${(props): string =>
    props.backgroundColor ? props.backgroundColor : background};
  border: 2px solid #e9e9e9;
  border-radius: 1px;
  color: ${textPrimary};
  font-size: 18px;
  font-weight: 600;
  outline: none;
  user-select: none;

  &:hover {
    background-color: rgba(256, 256, 256, 0.2);
    cursor: pointer;
  }

  &:active {
    height: 2rem;
  }
`;

interface ButtonProps {
  text: string;
  submitFunction: Function;
  backgroundColor?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const { text, submitFunction, backgroundColor, width } = props;

  return (
    <StyledButton
      onClick={submitFunction}
      text={text}
      style={{ background: backgroundColor }}
      width={width}
    >
      {text}
    </StyledButton>
  );
};

export { Button };
