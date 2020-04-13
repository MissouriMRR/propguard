import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Tutorial, Content } from "../types";

interface TutorialProps {
  disp: boolean;
}

const TutorialBG: AnyStyledComponent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: ${(props: TutorialProps): string => (props.disp ? "flex" : "none")};
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

const TutorialDisplay: React.FC = (): JSX.Element => {
  const [tutorialStep, setTutorialStep] = useGlobal("tutorialStep");
  const [tutorialName] = useGlobal("tutorialName");
  const [tutorialDisplay] = useGlobal("tutorialDisplay");

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
  data = data.allExampleGqlJson.nodes.find((tutorial: Tutorial): boolean => {
    return tutorial.tutorial_title === tutorialName;
  });

  const tutorialData = data.instructions[tutorialStep - 1].content.map(
    (element: Content, index: number) => {
      if (element.type === "text")
        return <p key={tutorialName + index.toString()}>{element.value}</p>;
      if (element.type === "code")
        return (
          <CodeBlock key={tutorialName + index.toString()}>
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
    <TutorialBG disp={tutorialDisplay}>
      <ContentWrapper>
        <Title>{data.instructions[tutorialStep - 1].title}</Title>
        <StepContentWrapper>{tutorialData}</StepContentWrapper>
      </ContentWrapper>
      <ButtonGroup>
        {tutorialStep === 1 ? (
          <div />
        ) : (
          <Button
            onClick={(): Promise<{ tutorialStep: number }> =>
              setTutorialStep(tutorialStep - 1)
            }
            next={false}
          >
            Back
          </Button>
        )}
        {tutorialStep === data.instructions.length ? null : (
          <Button
            onClick={(): Promise<{ tutorialStep: number }> =>
              setTutorialStep(tutorialStep + 1)
            }
            next
          >
            Next
          </Button>
        )}
      </ButtonGroup>
    </TutorialBG>
  );
};

export { TutorialDisplay };
