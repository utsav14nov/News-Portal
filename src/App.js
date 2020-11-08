import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/HomeContainer';
import Details from './components/Details/DetailsContainer';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
