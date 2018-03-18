import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import logo from '../media/logo.png'

//Example Communication With Electron
if(window.ipc){

}

class Login extends React.Component {
  render() {
    return (
      <div id="login-container">
        <img id='logo' src={logo}/>

          <input id="public-key" className="apiKeys" type="text" placeholder="Public Key" placeholder="tW1x0W94x5oj0PvJMkPtvjCNYAt1x1j7lhppBP8699aeZBl2uloxUUXlwUc0S5xZ"/><br/>
          <input id="secret-key" className="apiKeys" type="text" placeholder="Secret Key" placeholder="dG5CXcMraaYabgkuJzb1wiJRtUrnYGdIDm7JaWGBODVRXWy7Psgwox54jXN9Hkww"/><br/>
          <Link to={"/api/ping/"}><button id="login-button">Login</button><br/></Link>
      </div>
    );
  }
}

export default Login;