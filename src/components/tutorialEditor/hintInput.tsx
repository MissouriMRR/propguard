import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";

const StyledTextBox: AnyStyledComponent = styled.input`
  height: 46px;
  width: 100%;
  color: white;
  background-color: #46464e;
  outline: none;
  padding: 14px;
  border: none;
`;

interface HintProps {
  placeholder: string;
}

const HintInput: React.FC<HintProps> = ({ placeholder }): JSX.Element => {
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    return setValue(event.target.value);
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
