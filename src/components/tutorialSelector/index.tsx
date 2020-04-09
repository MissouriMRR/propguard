import React, { useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Tutorial } from "../types";

interface SelectorProps {
  display: boolean;
}

const TutorialMain: AnyStyledComponent = styled.div`
  background-color: #262626;
  color: #fff;
  height: 100%;
  width: 100%;
  display: ${(props: SelectorProps): string =>
    props.display ? "block" : "none"};
`;

const SingleTutorial: AnyStyledComponent = styled.div`
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

const Title: AnyStyledComponent = styled.h1`
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  padding-left: 20px;
  padding-top: 20px;
`;

const Description: AnyStyledComponent = styled.div`
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  padding-left: 20px;
  padding-bottom: 20px;
`;

const ThinLine: AnyStyledComponent = styled.hr`
  height: 1px;
  width: 100%;
  background: #727272;
  border: none;
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

  return (
    <TutorialMain display={selectorDisplay}>
      {data.allExampleGqlJson.nodes.map((value: Tutorial, index: number) => {
        return (
          <SingleTutorial
            key={tutorialName + index.toString()}
            onClick={(): void => {
              setTutorialStep(1);
              setTutorialName(value.tutorial_title);
              setSelectorDisplay(false);
              setTutorialDisplay(true);
            }}
          >
            <Title>{value.tutorial_title}</Title>
            <Description>{value.description}</Description>
            <ThinLine />
          </SingleTutorial>
        );
      })}
    </TutorialMain>
  );
};

export { TutorialSelector };
