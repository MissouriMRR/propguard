import React, { useState, useEffect, useGlobal } from "reactn";
import styled, { AnyStyledComponent } from "styled-components";

import { background, grey } from "../../constants";
import DroneOff from "../../assets/drone_status/drone_off.svg";
import DronePitch from "../../assets/drone_status/drone_pitch.svg";
import DroneRoll from "../../assets/drone_status/drone_roll.svg";
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

// TODO: Use Global state to determine what drone routine to run.
// TODO: Simplify the states into an object or use a custom
// React hook.
// TODO: Allow state to gradually change by using custom hook
// instead of external function with a return
const Output: React.FC = (): JSX.Element => {
  // Custom drone state hooks
  // TODO: Package as one object
  const [armed, setArmed] = useState(false);
  const [altitude, setAltitude] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [yaw, setYaw] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [roll, setRoll] = useState(0);
  // Global output state variables
  const [runOutput, setRunOutput] = useGlobal("runOutput");
  const [output] = useGlobal("output");

  // TODO: Allow changing drone routines
  useEffect(() => {
    if (!runOutput) return;
    let droneData = { armed, altitude, velocity, yaw, pitch, roll };
    droneData = performDroneRoutine(droneData, output.droneTask);

    // One second delay before displaying drone results.
    setTimeout(() => {
      setArmed(droneData.armed);
      setAltitude(droneData.altitude);
      setVelocity(droneData.velocity);
      setYaw(droneData.yaw);
      setPitch(droneData.pitch);
      setRoll(droneData.roll);
    }, 1000);

    setRunOutput(false);
  }, [runOutput]);

  // TODO: 3-way output success message
  return (
    <OutputWrapper>
      <OutputHeader>
        <h1>Output Result:</h1>
      </OutputHeader>
      <OutputConsole>
        <p>{output.message}</p>
      </OutputConsole>
      <StatusVisualization>
        <StatusTextGroup>
          <h1>{armed ? <span>Armed</span> : <span>Unarmed</span>}</h1>
          <p>Altitude: {altitude} m</p>
          <p>Velocity: {velocity} m/s</p>
        </StatusTextGroup>
        <VisualGroup>
          <DroneVisual>
            <DroneOff />
            <p>Yaw: {yaw}°</p>
          </DroneVisual>
          <div>
            <DroneVisual>
              <DronePitch />
              <p>Pitch: {pitch}°</p>
            </DroneVisual>
            <DroneVisual>
              <DroneRoll />
              <p>Roll: {roll}°</p>
            </DroneVisual>
          </div>
        </VisualGroup>
      </StatusVisualization>
    </OutputWrapper>
  );
};

export { Output };
