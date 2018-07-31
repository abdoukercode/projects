import React, { Component } from 'react';
import store from './store/index'
import RepoSearch from './RepoSearch'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="text-center">
         <RepoSearch store={store}/>
      </div>
    );
  }
}

export default App;
