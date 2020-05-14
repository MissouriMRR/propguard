import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import {
  grey,
  outputLoading,
  outputError,
  outputSuccess,
  textPrimary
} from "../../constants";

const StyledOutputHeader: AnyStyledComponent = styled.div`
  width: 100%;
  height: 4rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;
  border-top: none;

  h1 {
    font-size: 24px;
  }
`;

interface HeaderProps {
  result: string;
}

// Changes color depending on the status of the output. Defaults to white text
const ResultText: AnyStyledComponent = styled.span<HeaderProps>`
  color: ${(props): string =>
    (props.result === "Loading" && outputLoading) ||
    (props.result === "Error" && outputError) ||
    (props.result === "Successful" && outputSuccess) ||
    textPrimary};
`;

const OutputHeader: React.FC<HeaderProps> = (props): JSX.Element => {
  const { result } = props;

  return (
    <StyledOutputHeader>
      <h1>
        Output result: <ResultText result={result}>{result}</ResultText>
      </h1>
    </StyledOutputHeader>
  );
};

export { OutputHeader };
