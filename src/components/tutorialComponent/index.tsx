import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Tutorial, Content } from "../../types";
import { useLocalStorage } from "../hooks/index";

import { grey, codeColor } from "../../constants";
import { StepButton } from "./stepButton";

const TutorialBG: AnyStyledComponent = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  display: ${(props: TutorialProps): string =>
    props.disp === "TutorialComponent" ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TutorialHeader: AnyStyledComponent = styled.div`
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
  /* Disallow users to accidentally select title text when moving steps */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  h1 {
    font-size: 24px;
  }
`;

const ContentWrapper: AnyStyledComponent = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  font-size: 16px;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;

  p {
    margin: 2rem 0;
  }
`;

const CodeBlock: AnyStyledComponent = styled.div`
  padding: 1.5rem;
  font-family: "Source Code Pro", monospace;
  background-color: ${codeColor};
  border-radius: 5px;

  span {
    white-space: pre;
  }
`;

interface TutorialProps {
  disp: string;
}

const TutorialDisplay: React.FC = (): JSX.Element => {
  const [tutorialStep, setTutorialStep] = useGlobal("tutorialStep");
  const [tutorialName] = useGlobal("tutorialName");
  const [componentView] = useGlobal("componentView");
  const [, setOutput] = useGlobal("output");

  // useEffect(() => {

  // }, [tutorialName])

  const data = useStaticQuery(graphql`
    query {
      allExampleGqlJson {
        nodes {
          tutorialTitle
          instructions {
            title
            content {
              type
              value
            }
          }
        }
      }
    }
  `);

  const setLocalStorage = (step: number): void => {
    if (localStorage) {
      const [, , , setStep] = useLocalStorage(data);
      setStep(tutorialName, step);
    }
  };

  const stepForward = (): void => {
    setLocalStorage(tutorialStep + 1);
    setTutorialStep(tutorialStep + 1);
    // Reset output
    setOutput({ status: "", correct: false, message: "", droneTask: "" });
  };

  const stepBackward = (): void => {
    setLocalStorage(tutorialStep - 1);
    setTutorialStep(tutorialStep - 1);
    // Reset output
    setOutput({ status: "", correct: false, message: "", droneTask: "" });
  };

  // We destructure the data since this query returns an array, and when
  // we use the GraphQL filter it'll end up being an array of size 1. Otherwise
  // it just picks the first element
  const tutorialData = data.allExampleGqlJson.nodes.find(
    (tutorial: Tutorial): boolean => {
      return tutorial.tutorialTitle === tutorialName;
    }
  );

  if (!tutorialData) {
    return <p>Loading...</p>;
  }

  const tutorialInstructions = tutorialData.instructions[
    tutorialStep - 1
  ].content.map((element: Content, index: number) => {
    if (element.type === "text")
      return <p key={tutorialName + index.toString()}>{element.value}</p>;
    if (element.type === "code")
      return (
        <CodeBlock key={tutorialName + index.toString()}>
          <span>{element.value}</span>
        </CodeBlock>
      );
    return "Invalid content type found! Check your source JSONs!";
  });

  // Display of tutorial component depends on the global state variable
  // componentView and whether or not it equals "TutorialComponent"
  return (
    <TutorialBG disp={componentView}>
      <TutorialHeader>
        <StepButton
          clickFunction={stepBackward}
          next={false}
          tutorialStep={tutorialStep}
          totalSteps={tutorialData.instructions.length}
        />
        <h1>{tutorialData.instructions[tutorialStep - 1].title}</h1>
        <StepButton
          clickFunction={stepForward}
          next
          tutorialStep={tutorialStep}
          totalSteps={tutorialData.instructions.length}
        />
      </TutorialHeader>
      <ContentWrapper>{tutorialInstructions}</ContentWrapper>
    </TutorialBG>
  );
};

export { TutorialDisplay };
