import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import logo from '../media/logo.png'
import helpIcon from '../media/help-icon.png'
import '../animate.css'

//Example Communication With Electron
if(window.ipc){

}

class Login extends React.Component {
  render() {
    return (
      <div>
        <div id="login-header" className='animated slideInDown'>
            <img id='logo' draggable="false" src={logo}/>
        </div>
        <div id="login-container" className='animated zoomIn'>
            <img id='login-help-button' draggable="false" src={helpIcon} />
            <input id="public-key" className="apiKeys" type="text" placeholder="Public Key"/><br/>
            <input id="secret-key" className="apiKeys" type="text" placeholder="Secret Key"/><br/>
            <Link to={"/api/ping/"}><button id="login-button">Login</button><br/></Link>
        </div>
      </div>
    );
  }
}

export default Login;