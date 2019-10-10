import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing/Landing'
import styled from 'styled-components';

const App: React.FC = () => {
  const App = styled.div`
      height: 100vh;
  `

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
}

export default App;
