import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Tutorial, Content } from "../../types";
import { useLocalStorage } from "../hooks/index";

import { grey, codeColor } from "../../constants";
import { StepButton } from "./stepButton";

interface TutorialProps {
  disp: string;
}

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
  const [componentView] = useGlobal("componentView");
  const [, setOutput] = useGlobal("output");
  const [uploadTutorialComponent, setUploadTutorialComponent] = useGlobal(
    "uploadTutorialComponent"
  );

  let data = useStaticQuery(graphql`
    query {
      allExampleGqlJson {
        nodes {
          tutorial_title
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

  if (uploadTutorialComponent.length > 0) {
    for (let i = 0; i < uploadTutorialComponent.length; i++) {
      const instructionsArray = [];
      for (let j = 0; j < uploadTutorialComponent[i].instructions.length; j++) {
        const instructionsCopy = (({ title, content }) => ({
          title,
          content
        }))(uploadTutorialComponent[i].instructions[j]);
        instructionsArray.push(instructionsCopy);
      }
      const uploadCopy = (({ tutorial_title }) => ({
        tutorial_title
      }))(uploadTutorialComponent[i]);

      uploadCopy.instructions = instructionsArray;

      data.allExampleGqlJson.nodes.push(uploadCopy);
    }

    setUploadTutorialComponent([]);
  }

  const [tutName, tutStep, , setStep] = useLocalStorage(data);

  const stepForward = (): void => {
    setStep(tutName, tutStep + 1);
    setTutorialStep(tutorialStep + 1);
    // Reset output
    setOutput({ status: "", correct: false, message: "", droneTask: "" });
  };

  const stepBackward = (): void => {
    setStep(tutName, tutStep - 1);
    setTutorialStep(tutorialStep - 1);
    // Reset output
    setOutput({ status: "", correct: false, message: "", droneTask: "" });
  };

  // We destructure the data since this query returns an array, and when
  // we use the GraphQL filter it'll end up being an array of size 1. Otherwise
  // it just picks the first element
  data = data.allExampleGqlJson.nodes.find((tutorial: Tutorial): boolean => {
    return tutorial.tutorial_title === tutorialName;
  });

  const tutorialData = data.instructions[tutStep - 1].content.map(
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

  // Display of tutorial component depends on the global state variable
  // componentView and whether or not it equals "TutorialComponent"
  return (
    <TutorialBG disp={componentView}>
      <TutorialHeader>
        <StepButton
          clickFunction={stepBackward}
          next={false}
          tutorialStep={tutStep}
          totalSteps={data.instructions.length}
        />
        <h1>{data.instructions[tutStep - 1].title}</h1>
        <StepButton
          clickFunction={stepForward}
          next
          tutorialStep={tutStep}
          totalSteps={data.instructions.length}
        />
      </TutorialHeader>
      <ContentWrapper>{tutorialData}</ContentWrapper>
    </TutorialBG>
  );
};

export { TutorialDisplay };
