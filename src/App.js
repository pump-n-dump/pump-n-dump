import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Example Communication With Electron
if(window.ipc){
  //ipcRenderer.send('testPing', 'hello from client');
  window.ipc.send('testPing', 'hello from client');
  window.ipc.on("testPong", (event, data) => {
    alert(data);
    console.log(data);
  });
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
