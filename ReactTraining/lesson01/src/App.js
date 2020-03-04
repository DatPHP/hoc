import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to study React js </h2>
        </div>
        <p className="App-intro">
          Welcome to Dat go to React JS <code>src/App.js</code> Have a ncie day!.
        </p>
      </div>
    );
  }
}

export default App;
