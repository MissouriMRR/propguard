import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { AnyStyledComponent } from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Landing } from "./components/landing/Landing";

const Main: AnyStyledComponent = styled.main`
  height: 100vh;
  overflow-y: hidden;
`;

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Main>
        <Landing />

        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </Main>
    </Router>
  );
};

export { App };
