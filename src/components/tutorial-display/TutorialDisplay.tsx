import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const TutorialBG: AnyStyledComponent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 70%;

  h1 {
    font-size: 32px;
  }
`;

const Title: AnyStyledComponent = styled.h1`
  text-align: left;
  font-size: 32px;
  font-weight: normal;
  margin: 20px 0 0 0;
  width: 80%;
`;

const TutorialText: AnyStyledComponent = styled.div`
  font-size: 16px;
  max-width: 80%;
`;

const TutorialDisplay: React.FC = (): JSX.Element => {
  return (
    <TutorialBG>
      <Title>Example tutorial</Title>
      <TutorialText>
        <p>This component is currently being implemented.</p>
      </TutorialText>
    </TutorialBG>
  );
};

export { TutorialDisplay };
