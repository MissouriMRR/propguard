/* eslint react/no-array-index-key: 0 */
// NOTE: We use the index for the the array.map function simply because
// we don't modify the array afterwords, so the index will always be correct
import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

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

interface IContent {
  type: String;
  value: String;
}

interface IInstruction {
  step: Number;
  title: String;
  type: String;
  content: Array<IContent>
}

interface ITutorial {
  id: String;
  tutorial_title: String;
  instructions: Array<IInstruction>;
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

const TutorialDisplay: React.FC = (): JSX.Element => {
  const [step, setStep] = useState(1);
  let selectedTutorial: string = "Hello Data";

  // TODO: Add a filter here to select a tutorial. Bonus if you can use
  // a varible to do so
  let data = useStaticQuery(graphql`
    query {
      allExampleGqlJson {
        nodes {
          tutorial_title
          instructions {
            step
            title
            type
            content {
              type
              value
            }
          }
        }
      }
    }
  `);

  // We destructure the data since this query returns an array, and when
  // we use the GraphQL filter it'll end up being an array of size 1. Otherwise
  // it just picks the first element
  [data] = data.allExampleGqlJson.nodes.filter((tutorial: ITutorial) => tutorial.tutorial_title === selectedTutorial);

  const tutorialData = data.instructions[step - 1].content.map(
    (element: IContent, index: number) => {
      if (element.type === "text") return <p key={index}>{element.value}</p>;
      if (element.type === "code")
        return (
          <CodeBlock key={index}>
            <span>{element.value}</span>
          </CodeBlock>
        );
      return "Invalid content type found! Check your source JSONs!";
    }
  );

  // Empty div shown in place of back button on the first step so
  // the next button stays in the same place, and the next button is
  // removed on the final step
  return (
    <TutorialBG>
      <ContentWrapper>
        <Title>{data.instructions[step - 1].title}</Title>
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
        {step === data.instructions.length ? null : (
          <Button onClick={(): void => setStep(step + 1)} next>
            Next
          </Button>
        )}
      </ButtonGroup>
    </TutorialBG>
  );
};

export { TutorialDisplay };
