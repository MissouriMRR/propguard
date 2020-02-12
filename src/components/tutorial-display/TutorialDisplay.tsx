import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";

// TODO: Switch data source from local sources to a backend API
import data from "../../tutorial_data/example_tut.json";

const TutorialBG: AnyStyledComponent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const StepContentWrapper: AnyStyledComponent = styled.div`
  height: 100%;
  max-height: 55vh;
  overflow-y: auto;
`;

const ContentWrapper: AnyStyledComponent = styled.div`
  width: 80%;
  height: 100%;
  font-size: 16px;
`;

interface ButtonProps {
  next: boolean;
}

const Button: AnyStyledComponent = styled.button`
  height: 2.5rem;
  width: 6rem;

  background-color: ${(props: ButtonProps): string =>
    props.next ? "#87C5FF" : "#C5C5C5"};
  border: none;
  border-radius: 5px;

  font-size: 18px;
`;

const CodeBlock: AnyStyledComponent = styled.div`
  padding: 0.5rem 1rem;
  font-family: "Source Code Pro";
  background-color: #e8e8e8;
  border-radius: 5px;

  span {
    white-space: pre;
  }
`;

const ButtonGroup: AnyStyledComponent = styled.div`
  width: 80%;
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// FIXME: Make sure that you can't walk over the array
const TutorialDisplay: React.FC = (): JSX.Element => {
  const [step, setStep] = useState(1);

  const tutorialData = data[step - 1].instructions.map(element => {
    if (element.type === "text") return <p>{element.content}</p>;
    if (element.type === "code")
      return (
        <CodeBlock>
          <span>{element.content}</span>
        </CodeBlock>
      );
    return "Hi";
  });

  // Empty div shown in place of back button on the first step so
  // the next button stays in the same place, and the next button is
  // removed on the final step
  return (
    <TutorialBG>
      <ContentWrapper>
        <Title>{data[step - 1].title}</Title>
        <StepContentWrapper>{tutorialData}</StepContentWrapper>
      </ContentWrapper>
      <ButtonGroup>
        {step === 1 ? (
          <div />
        ) : (
          <Button onClick={(): void => setStep(step - 1)} next={false}>
            Back
          </Button>
        )}
        {step === data.length ? null : (
          <Button onClick={(): void => setStep(step + 1)} next>
            Next
          </Button>
        )}
      </ButtonGroup>
    </TutorialBG>
  );
};

export { TutorialDisplay };
