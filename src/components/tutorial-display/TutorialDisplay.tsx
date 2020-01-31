import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";

// TODO: Switch data source from local sources to a backend API
import data from "../../tutorial_data/example_tut";

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

const ContentWrapper: AnyStyledComponent = styled.div`
  font-size: 16px;
  max-width: 80%;
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
  background-color: grey;
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
          <p>{element.content}</p>
        </CodeBlock>
      );
    return "Hi";
  });

  return (
    <TutorialBG>
      <ContentWrapper>
        <Title>{data[step - 1].title}</Title>
        {tutorialData}
      </ContentWrapper>
      <ButtonGroup>
        <Button onClick={(): void => setStep(step - 1)} next={false}>
          Back
        </Button>
        <Button onClick={(): void => setStep(step + 1)} next>
          Next
        </Button>
      </ButtonGroup>
    </TutorialBG>
  );
};

export { TutorialDisplay };
