import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Pings Server (Hello World Example)
class Ping extends React.Component {
  state = {
    response: ''
  };

  render() {
    return(
      <div>
        <p>I Ping Server</p>
        <Link to={"/home"}><p>Link To Home</p></Link>
      </div>
    );
  }
}
export default Ping;