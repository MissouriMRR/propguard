import React from "react";
import { Link } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";

const Land: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dce1ee;
  height: 100vh;
`;

const Main: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  @media screen and (max-width: 575px) {
    .jumbotron {
      padding-top: 60px;
    }
  }
`;

const Title: AnyStyledComponent = styled.div`
  position: relative;
  font-family: "Raleway", "Open Sans", "Roboto";
  font-size: 96px;
  font-weight: normal;
  width: 190px;
  height: auto;
  margin: 0 auto 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0);
  overflow: hidden;
  transform: translateY(-50%);
  animation: typewriter 1s steps(9) 1s 1 normal both,
    blinkTextCursor 1s steps(11) infinite normal;

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 490px;
    }
  }

  @keyframes blinkTextCursor {
    0% {
      border-right-color: rgba(0, 0, 0, 1);
    }
    25% {
      border-right-color: rgba(0, 0, 0, 1);
    }
    50% {
      border-right-color: rgba(0, 0, 00, 1);
    }
    75% {
      border-right-color: transparent;
    }
    100% {
      border-right-color: transparent;
    }
  }
`;

const Subtext: AnyStyledComponent = styled.span`
  font-size: 18px;
  font-weight: normal;
  max-width: 467px;
  margin: -50px auto 0 auto;
  text-align: center;
`;

const Button: AnyStyledComponent = styled.button`
  background-color: #8dca5d;
  border-radius: 5px;
  border-style: none;
  color: white;
  margin: 50px auto;
  height: 40px;
  width: 150px;
`;

const Landing: React.FC = (): JSX.Element => {
  return (
    <Land>
      <Main>
        <Title>Propguard</Title>
        <Subtext>
          A webapp that teaches people how to use Dronekit and Python to start
          and launch the drones
        </Subtext>
        <br />
        <Link to="/tutorial">
          <Button>Start</Button>
        </Link>
      </Main>
    </Land>
  );
};

export { Landing };
