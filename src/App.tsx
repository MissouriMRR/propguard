import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Landing } from "./components/landing/Landing";

const App: React.FC = () => {
  const App = styled.div`
    height: 100vh;
  `;

  return (
    <Router>
      <App className="App">
        <Landing />

        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </App>
    </Router>
  );
};

export default App;
