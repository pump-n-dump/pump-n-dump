import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Login';
import Ping from './components/Ping';
import './index.css';

//Assigns URL routes
ReactDOM.render(
  <BrowserRouter>
  {/*Replaces compnents based on URL*/}
    <Switch>
      <Route path="/api/ping" component={Ping} />
      <Route path="*" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);