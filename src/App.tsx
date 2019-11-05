import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { TutorialApp } from "./components/tutorial-app/TutorialApp";
import { Landing } from "./components/landing/Landing";

const App: React.FC = (): JSX.Element => {
  const Main: AnyStyledComponent = styled.div`
    height: 100vh;
    overflow-y: hidden;
  `;

  return (
    <Router>
      <Main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/tutorial" component={TutorialApp} />
        </Switch>
      </Main>
    </Router>
  );
};

export { App };
