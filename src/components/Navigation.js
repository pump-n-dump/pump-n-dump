import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../media/logo.png'
import './Navigation.css'

//Pings Server (Hello World Example)
class Navigation extends React.Component {
  state = {
    response: ''
  };

  render() {
    return(
      <img id='nav-logo' src={logo}/>
    );
  }
}
export default Navigation;