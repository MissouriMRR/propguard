import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import turtle from "./images/turtle.png";

const Main: AnyStyledComponent = styled.div`
  display: inline-block;
  margin-top: 20px;
  width: 75%;
  height: 90%;
  border-radius: 5px;
  background-color: white;
  text-align: center;

  @media only screen and (max-width: 800px) {
    text-align: left;
  }
`;

const Turtle: AnyStyledComponent = styled.img`
  position: relative;
  border-radius: 35px;
  width: 150px;
  height: auto;
  margin-top: 25px;
  display: inline;

  @media only screen and (max-width: 800px) {
    margin-top: 0;
    padding: 10px;
    display: inline-block;
  }
`;

const Data: AnyStyledComponent = styled.div`
  position: relative;
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  display: inline;

  @media only screen and (max-width: 800px) {
    margin-top: 0px;
    display: inline-block;
    padding-top: 20px;
    padding-left: 20px;
  }
`;

const Armed: AnyStyledComponent = styled.h1`
  position: relative;
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const DataElem: AnyStyledComponent = styled.h2`
  font-size: 22px;
  font-weight: normal;
`;

const ResetBtn: AnyStyledComponent = styled.button`
  position: absolute;
  border-radius: 5px;
  background-color: #c5c5c5;
  bottom: 70px;
  width: 120px;
  height: 35px;
  margin-left: -57.5px;
  outline: none;
  border: none;
  display: inline;

  :hover {
    background-color: #a5a5a5;
  }

  @media only screen and (max-width: 800px) {
    position: relative;
    top: 0;
    bottom: 0;
  }
`;

const Output: React.FC = (): JSX.Element => {
  let [armed] = useState(false);
  let [altitude] = useState(0);
  let [velocity] = useState(0);

  return (
    <Main>
      <Turtle src={turtle} alt="Turtle Drone" />
      <Data>
        <Armed>{armed ? <span>Armed</span> : <span>Unarmed</span>}</Armed>
        <DataElem>Altitude: {altitude} m</DataElem>
        <DataElem>Velocity: {velocity} m/s</DataElem>
      </Data>
      <ResetBtn>Reset Drone</ResetBtn>
    </Main>
  );
};

export { Output };
