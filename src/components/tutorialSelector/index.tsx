import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Tutorial } from "../types";
import { useLocalStorage } from "../useLocalStorage";

import { accent, background, grey, textPrimary } from "../../constants";

interface SelectorProps {
  disp: boolean;
}

const Selector: AnyStyledComponent = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  display: ${(props: SelectorProps): string => (props.disp ? "block" : "none")};
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
  const [selectorDisplay, setSelectorDisplay] = useGlobal("selectorDisplay");
  const [, setTutorialDisplay] = useGlobal("tutorialDisplay");

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

  const [, tutStep] = useLocalStorage(data);

  return (
    <Selector disp={selectorDisplay}>
      <SelectorHeader>
        <h1>Select a tutorial</h1>
      </SelectorHeader>
      {data.allExampleGqlJson.nodes.map((value: Tutorial, index: number) => {
        return (
          <SingleTutorial
            key={tutorialName + index.toString()}
            onClick={(): void => {
              setTutorialStep(tutStep);
              localStorage.setItem("tutName", value.tutorial_title);
              setTutorialName(value.tutorial_title);
              setSelectorDisplay(false);
              setTutorialDisplay(true);
            }}
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
