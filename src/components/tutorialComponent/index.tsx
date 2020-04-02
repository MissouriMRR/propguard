/* eslint react/no-array-index-key: 0 */
// NOTE: We use the index for the the array.map function simply because
// we don't modify the array afterwords, so the index will always be correct
import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { grey, codeColor } from "../../constants";

const TutorialBG: AnyStyledComponent = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TutorialHeader: AnyStyledComponent = styled.div`
  width: 100%;
  height: 4rem;
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

const ContentWrapper: AnyStyledComponent = styled.div`
  height: 100%;
  padding: 0 2rem;
  font-size: 16px;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
`;

interface ButtonProps {
  next: boolean;
}

interface Content {
  type: string;
  value: string;
}

interface Instruction {
  step: number;
  title: string;
  type: string;
  content: Array<Content>;
}

interface Tutorial {
  id: string;
  tutorial_title: string;
  instructions: Array<Instruction>;
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
  padding: 1.5rem;
  font-family: "Source Code Pro";
  background-color: ${codeColor};
  border-radius: 5px;

  span {
    white-space: pre;
  }
`;

const TutorialDisplay: React.FC = (): JSX.Element => {
  const [tutorialStep, setTutorialStep] = useGlobal("tutorialStep");
  const [tutorialName] = useGlobal("tutorialName");

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
  [data] = data.allExampleGqlJson.nodes.filter(
    (tutorial: Tutorial) => tutorial.tutorial_title === tutorialName
  );

  const tutorialData = data.instructions[tutorialStep - 1].content.map(
    (element: Content, index: number) => {
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
      <TutorialHeader>
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
        <h1>{data.instructions[tutorialStep - 1].title}</h1>
        {tutorialStep === data.instructions.length ? (
          <div />
        ) : (
          <Button
            onClick={(): Promise<{ tutorialStep: number }> =>
              setTutorialStep(tutorialStep + 1)
            }
            next
          >
            Next
          </Button>
        )}
      </TutorialHeader>
      <ContentWrapper>{tutorialData}</ContentWrapper>
    </TutorialBG>
  );
};

export { TutorialDisplay };
