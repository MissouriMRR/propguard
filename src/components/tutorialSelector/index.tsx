/* eslint react/no-array-index-key: 0 */
// NOTE: We use the index for the the array.map function simply because
// we don't modify the array afterwords, so the index will always be correct
import React from "reactn";
import styled, { AnyStyledComponent } from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { Tutorial } from "../interfaces";

const TutorialMain: AnyStyledComponent = styled.div`
  background-color: #262626;
  color: #fff;
  height: 100%;
  width: 100%;
`;

const Title: AnyStyledComponent = styled.h1`
  color: #fff;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  padding: 20px;
`;

const ThinLine: AnyStyledComponent = styled.hr`
  height: 1px;
  width: 100%;
  background: #727272;
  border: none;
`;

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
        return (
          <div key={index}>
            <Title key={index}>{value.tutorial_title}</Title>
            <ThinLine key={index} />
          </div>
        );
      })}
    </TutorialMain>
  );
};

export { TutorialSelector };
