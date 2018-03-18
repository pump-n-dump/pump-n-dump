import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Ping from './components/Ping';
import Login from './pages/Login';
import './index.css';

//Assigns URL routes
ReactDOM.render(
  <BrowserRouter>
  {/*Replaces compnents based on URL*/}
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/api/ping" component={Ping} />
      <Route path="/*" component={Login}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);