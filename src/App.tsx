import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Landing from './components/landing/Landing'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Landing></Landing>

        <Switch>
          <Redirect from="/" to="home" />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
