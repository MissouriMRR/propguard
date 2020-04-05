import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import turtle from "./images/turtle.png";

import { background, grey } from "../../constants";

const OutputWrapper: AnyStyledComponent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${background};
`;

const OutputHeader: AnyStyledComponent = styled.div`
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

  h1 {
    font-size: 24px;
  }
`;

const OutputTerminal: AnyStyledComponent = styled.div`
  height: 20rem;
  padding: 0 1rem;
  border-bottom: 1px solid ${grey};
  font-family: "Source Code Pro";
  white-space: pre;
`;

const StatusVisualization: AnyStyledComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: 600;
    margin: 1rem;
  }

  p {
    margin: 0.25rem;
  }
`;

const Turtle: AnyStyledComponent = styled.img`
  margin-top: 20px;
  width: 150px;
  height: auto;
  border-radius: 30px;
  display: inline-block;

  @media screen and (max-width: 577px) {
    display: none;
  }
`;

// TODO: Work on drone vector graphics
// TODO: Replace the local state stuff to react from global state
const Output: React.FC = (): JSX.Element => {
  const [armed, setArmed] = useState(false);
  const [altitude, setAltitude] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const altitudeText = `Altitude: ${altitude} m`;
  const velocityText = `Velocity: ${velocity} m/s`;

  const resetDroneState = (): void => {
    setArmed(false);
    setAltitude(0);
    setVelocity(0);
  };

  return (
    <OutputWrapper>
      <OutputHeader>
        <h1>Output Result: </h1>
      </OutputHeader>
      <OutputTerminal>
        <p>See your code output here.</p>
      </OutputTerminal>
      <StatusVisualization>
        <h1>{armed ? <span>Armed</span> : <span>Unarmed</span>}</h1>
        <p>{altitudeText}</p>
        <p>{velocityText}</p>
        <Turtle src={turtle} alt="Turtle Drone" />
      </StatusVisualization>
    </OutputWrapper>
  );
};

export { Output };
