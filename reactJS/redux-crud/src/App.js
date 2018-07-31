import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GamesPage from './pages/GamesPage'
import GameForm from './../src/pages/GameForm'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">

          <div className="ui three item menu">
              <Link className="item active" to="/">Home</Link>
              <Link className="item active" to="/games">Games</Link>
              <Link className="item active" to="/games/newt"> new Game</Link>
          </div> 
    
      
        <Route exact path="/games"  component={GamesPage} />
        <Route  path="/games/new" component={GameForm} />  
        </div>
      </Router>
    );
  }
}

export default App;
