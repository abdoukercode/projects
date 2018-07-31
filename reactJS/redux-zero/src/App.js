import React, { Component } from 'react';
import Calculator from './components/Calculator'
/* import { createStore } from "redux";
import {Provider} from 'react-redux'
import reducer from './reducers/index' */

import logo from './logo.svg';
import './App.css';

/* const store = createStore(reducer); */

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
    
          <Calculator />
          
      </div>
    );
  }
}

export default App;
