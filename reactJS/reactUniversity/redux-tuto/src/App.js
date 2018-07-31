import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/index'
import InputMirror from './features/inputMirror'

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
        <Counter />
        <hr/><hr/>
        <InputMirror/>
      </div>
      
    );
  }
}

export default App;
