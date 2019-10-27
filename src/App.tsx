import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Landing } from "./components/landing/Landing";
import { TutorialApp } from "components/tutorial-app/TutorialApp";

const Main: AnyStyledComponent = styled.div`
  height: 100vh;
  overflow-y: hidden;
`;

const App: React.FC = (): JSX.Element => {
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
