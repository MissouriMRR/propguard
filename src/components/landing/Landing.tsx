import React from "react";
import { Link } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";

const Land: AnyStyledComponent = styled.div`
  height: 100%;
  overflow-x: hidden;
  background-color: #454c60;
`;

const Main: AnyStyledComponent = styled.div`
  height: 350px;
  color: white;

  @media screen and (max-width: 575px) {
    .jumbotron {
      padding-top: 60px;
    }
  }
`;

const Title: AnyStyledComponent = styled.div`
  position: relative;
  font-size: 40px;
  width: 16em;
  height: 16%;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0);
  overflow: hidden;
  transform: translateY(-50%);
  font-weight: 400;
  animation: typewriter 1s steps(9) 1s 1 normal both,
    blinkTextCursor 1s steps(11) infinite normal;

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 190px;
    }
  }

  @keyframes blinkTextCursor {
    0% {
      border-right-color: rgba(255, 255, 255, 1);
    }
    25% {
      border-right-color: rgba(255, 255, 255, 1);
    }
    50% {
      border-right-color: rgba(255, 255, 255, 1);
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
  font-size: 16px;
`;

const Button: AnyStyledComponent = styled.button`
  background-color: #afeb80;
  color: white;
`;

const Landing: React.FC = (): JSX.Element => {
  return (
    <Land>
      <div className="container h-100 text-center">
        <div className="row align-items-center h-100">
          <Main className="col-lg-6 col-md-8 col-10 offset-lg-3 offset-md-2 offset-1 text-center mt-5 mt-xl-0">
            <Title>Propguard</Title>
            <Subtext>
              A webapp that teaches people how to use Dronekit and Python to
              start and launch the drones
            </Subtext>
            <br />
            <Link to="/tutorial">
              <Button className="btn col-6 mt-5">Start Tutorial</Button>
            </Link>
          </Main>
        </div>
      </div>
    </Land>
  );
};

export { Landing };
