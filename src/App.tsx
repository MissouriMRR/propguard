import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import { TutorialApp } from "./components/tutorial-app/TutorialApp";
import { Landing } from "./components/landing/Landing";

const AppWrapper: AnyStyledComponent = styled.div`
  background-color: #dce1ee;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
`;

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/tutorial" component={TutorialApp} />
        </Switch>
      </AppWrapper>
    </Router>
  );
};

export { App };
