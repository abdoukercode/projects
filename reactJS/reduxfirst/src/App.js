import React, { Component } from 'react';
import Counter from './Counter'
import store from './store/'
import List from './List'
import {Provider} from "react-redux"


 class App extends Component {
  render() {
    return (
      <div className="container mt-5 text-center">
          <Provider store={store}><Counter /></Provider> 
            
          <hr/>
          <Provider store={store}>
            <List />
          </Provider>
          
    </div>      
    );
  }
}


export default App;
