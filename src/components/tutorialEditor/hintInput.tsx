import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import { codeColor } from "../../constants";

const StyledTextBox: AnyStyledComponent = styled.input`
  height: 46px;
  width: 100%;
  color: white;
  background-color: ${codeColor};
  outline: none;
  padding: 14px;
  border: none;
  border-radius: 2px;
`;

interface HintProps {
  attributeName: string;
  value: string;
  setValue: (attributeName: string, value: string) => void;
  placeholder: string;
}

const HintInput: React.FC<HintProps> = ({
  attributeName,
  value,
  setValue,
  placeholder
}): JSX.Element => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    return setValue(attributeName, event.target.value);
  };

  return (
    <>
      <div>
        <StyledTextBox
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export { HintInput };
