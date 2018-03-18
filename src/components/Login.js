import React from 'react';
import {Link} from 'react-router-dom';

//Example Communication With Electron
if(window.ipc){
  window.ipc.send('testPing', 'hello from client');
  window.ipc.on("testPong", (event, data) => {
    alert(data);
    console.log(data);
  });
}

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Link to={"/api/ping/"}><p>Link</p></Link>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;