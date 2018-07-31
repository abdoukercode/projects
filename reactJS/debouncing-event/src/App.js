
import React, { Component } from "react";
import Widget from './Widget'
import {debounce} from 'lodash'
import "./index.css";

export default class App extends Component {
  state = { show: true };
  handleToggle =debounce( () => {
    this.setState(prevState => ({ show: !prevState.show }));
  }, 1000 );
  render() {
    return (
      <div className="container ">
        <div className="col-lg-1"><button onClick={this.handleToggle} >Toggle</button></div><br/>
        {this.state.show ? <Widget /> : null}
      </div>
    );
  }
}


