/* eslint react/no-array-index-key: 0 */
// NOTE: We use the index for the the array.map function simply because
// we don't modify the array afterwords, so the index will always be correct
import React from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const TutorialMain: AnyStyledComponent = styled.div`
  background-color: #262626;
  color: #fff;
  height: 100%;
  width: 100%;
`;

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

const TutorialSelector: React.FC = (): JSX.Element => {
  //   const [tutorialStep, setTutorialStep] = useGlobal("tutorialStep");
  //   const [tutorialName] = useGlobal("tutorialName");

  const data = useStaticQuery(graphql`
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

  return (
    <TutorialMain>
      {data.allExampleGqlJson.nodes.map((value: Tutorial, index: number) => {
        return <div key={index}>{value.tutorial_title}</div>;
      })}
    </TutorialMain>
  );
};

export { TutorialSelector };
