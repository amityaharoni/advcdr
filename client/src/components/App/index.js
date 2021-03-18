import './index.scss';
import Navbar from './navbar';
import Report from './report';
import { CallerDateForm } from './callerDateFilter';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <h1>AdvCDR</h1>
                <Report />
                {/* <CallerDateForm /> */}
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/teams"
            render={() => (
              <React.Fragment>
                <h1>Teams</h1>
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
