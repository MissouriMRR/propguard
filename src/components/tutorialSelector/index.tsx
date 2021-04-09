import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Tutorial } from "../../types";
import { useLocalStorage, useLocalStorageView } from "../hooks/index";

import { accent, background, grey, textPrimary } from "../../constants";

interface SelectorProps {
  disp: string;
}

const Selector: AnyStyledComponent = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  display: ${(props: SelectorProps): string =>
    props.disp === "TutorialSelector" ? "block" : "none"};
  background-color: ${background};
  color: ${textPrimary};
`;

const SelectorHeader: AnyStyledComponent = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${grey};
  border-left: none;
  border-right: none;
  border-top: none;

  h1 {
    font-size: 24px;
  }
`;

const SingleTutorial: AnyStyledComponent = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid ${grey};
  color: ${textPrimary};

  &:hover {
    background: rgba(256, 256, 256, 0.1);
    color: ${accent};
    cursor: pointer;
  }

  &:active {
    background: rgba(256, 256, 256, 0.4);
    color: ${accent};
  }
`;

const Title: AnyStyledComponent = styled.h1`
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  margin: 0 0 0.5rem 0;
`;

const Description: AnyStyledComponent = styled.div`
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
`;

const TutorialSelector: React.FC = (): JSX.Element => {
  const [, setTutorialStep] = useGlobal("tutorialStep");
  const [tutorialName, setTutorialName] = useGlobal("tutorialName");
  const [componentView, setComponentView] = useGlobal("componentView");
  const [upload] = useGlobal("upload");

  const data = useStaticQuery(graphql`
    query {
      allExampleGqlJson {
        nodes {
          tutorial_title
          description
        }
      }
    }
  `);

  if (upload) {
    for (let i = 0; i < upload.length; i++) {
      const uploadCopy = (({ tutorial_title, description }) => ({
        tutorial_title,
        description
      }))(upload[i]);
      data.allExampleGqlJson.nodes.push(uploadCopy);
    }
  }

  const [, tutStep, setCurrentTutorial] = useLocalStorage(data);
  const [, setComponentViewSave] = useLocalStorageView();

  const handleClick = (title: string): void => {
    // Setting Global States
    setTutorialStep(tutStep);
    setTutorialName(title);
    setComponentView("TutorialComponent"); // Changes view to show instructions

    // Setting Local Storage
    setCurrentTutorial(title);
    setComponentViewSave("TutorialComponent"); // Saves the view choice
  };

  // Display of tutorial selector depends on the global state variable
  // componentView and whether or not it equals "TutorialSelector"
  return (
    <Selector disp={componentView}>
      <SelectorHeader>
        <h1>Select a tutorial</h1>
      </SelectorHeader>
      {data.allExampleGqlJson.nodes.map((value: Tutorial, index: number) => {
        return (
          <SingleTutorial
            key={tutorialName + index.toString()}
            onClick={(): void => handleClick(value.tutorial_title)}
          >
            <Title>{value.tutorial_title}</Title>
            <Description>{value.description}</Description>
          </SingleTutorial>
        );
      })}
    </Selector>
  );
};

export { TutorialSelector };
