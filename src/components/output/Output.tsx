import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import turtle from "./images/turtle.png";

const Main: AnyStyledComponent = styled.div`
  display: inline-block;
  background-color: white;
  margin-top: 20px;
  width: 75%;
  height: 90%;
  border-radius: 5px;
  resize: none;
  border: none;
`;

const Container: AnyStyledComponent = styled.section`
  text-align: center;
`;

const TurtleContainer: AnyStyledComponent = styled.div`
  display: inline-block;

  @media screen and (max-width: 495px) {
    display: none;
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

const Data: AnyStyledComponent = styled.section`
  width: 100%;
`;

const DataContainer: AnyStyledComponent = styled.section`
  width: 100%;
`;

const Armed: AnyStyledComponent = styled.h1`
  font-size: 30px;
`;

const DataElem: AnyStyledComponent = styled.h2`
  font-size: 18px;
  font-weight: normal;
  color: grey;
  width: 100%;
`;

const ResetBtn: AnyStyledComponent = styled.button``;

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
    <Main>
      <Container className="row">
        <TurtleContainer className="offset-1 offset-md-0 col-4 col-md-12">
          <Turtle src={turtle} alt="Turtle Drone" />
        </TurtleContainer>
        <DataContainer className="col-12 col-sm-7 col-md-12 mt-3 mt-md-2">
          <Data>
            <Armed>{armed ? <span>Armed</span> : <span>Unarmed</span>}</Armed>
            <DataElem>{altitudeText}</DataElem>
            <DataElem>{velocityText}</DataElem>
            <ResetBtn className="btn btn-secondary" onClick={resetDroneState}>
              Reset Drone
            </ResetBtn>
          </Data>
        </DataContainer>
      </Container>
    </Main>
  );
};

export { Output };
