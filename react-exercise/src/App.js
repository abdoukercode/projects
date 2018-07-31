import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';
class App extends Component {

state= {
  userName: "rayedia camara"
}

appInputChange= (e)=> {
  this.setState({
    userName: e.target.value
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <UserInput changed={this.appInputChange} value={this.state.userName} />
          <br /><hr /><br />
          <UserOutput  userName={this.state.userName}/>
        </div>

      </div>
    );
  }
}

export default App;
