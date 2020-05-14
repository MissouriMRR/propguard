import React, { useState, useEffect, useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import { background, grey } from "../../constants";
import DroneOff from "../../assets/drone_status/drone_off.svg";
import DronePitch from "../../assets/drone_status/drone_pitch.svg";
import DroneRoll from "../../assets/drone_status/drone_roll.svg";
import { OutputHeader } from "./outputHeader";
import { performDroneRoutine } from "../../data/routines";

const OutputWrapper: AnyStyledComponent = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${background};
`;

const OutputConsole: AnyStyledComponent = styled.div`
  min-height: 15rem;
  padding: 0 1rem;
  border-bottom: 1px solid ${grey};
  font-family: "Source Code Pro";
`;

const StatusVisualization: AnyStyledComponent = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: stretch;
  flex-grow: 1;
`;

const StatusTextGroup: AnyStyledComponent = styled.div`
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

const VisualGroup: AnyStyledComponent = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const DroneVisual: AnyStyledComponent = styled.div`
  width: 16rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  svg {
    max-width: 12rem;
  }

  p {
    margin: 0;
  }
`;

const Output: React.FC = (): JSX.Element => {
  // State for drone state visualization
  const [droneState, setDroneState] = useState({
    armed: false,
    altitude: 0,
    velocity: 0,
    yaw: 0,
    pitch: 0,
    roll: 0
  });
  // Global output state variables
  const [output] = useGlobal("output");

  useEffect(() => {
    if (output.status === "none") return;
    const newDroneState = performDroneRoutine(droneState, output.droneTask);

    setDroneState(newDroneState);
  }, [output.status]);

  // TODO: 3-way output success message
  return (
    <OutputWrapper>
      <OutputHeader result={output.status} />
      <OutputConsole>
        <p>{output.message}</p>
      </OutputConsole>
      <StatusVisualization>
        <StatusTextGroup>
          <h1>
            {droneState.armed ? <span>Armed</span> : <span>Unarmed</span>}
          </h1>
          <p>Altitude: {droneState.altitude} m</p>
          <p>Velocity: {droneState.velocity} m/s</p>
        </StatusTextGroup>
        <VisualGroup>
          <DroneVisual>
            <DroneOff />
            <p>Yaw: {droneState.yaw}°</p>
          </DroneVisual>
          <div>
            <DroneVisual>
              <DronePitch />
              <p>Pitch: {droneState.pitch}°</p>
            </DroneVisual>
            <DroneVisual>
              <DroneRoll />
              <p>Roll: {droneState.roll}°</p>
            </DroneVisual>
          </div>
        </VisualGroup>
      </StatusVisualization>
    </OutputWrapper>
  );
};

export { Output };
