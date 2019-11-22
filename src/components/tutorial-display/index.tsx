import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const TutorialBG: AnyStyledComponent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 70%;

  h1 {
    font-size: 32px;
  }
`;

const Title: AnyStyledComponent = styled.div`
  font-size: 32px;
  margin-top: 20px;
`;

const TutorialDisplay: React.FC = (): JSX.Element => {
  return (
    <TutorialBG>
      <Title>Tutorials will go here</Title>
    </TutorialBG>
  );
};

export { TutorialDisplay };
