
import React, { Component } from "react";
import {debounce} from "lodash"


export default class Widget extends Component {
  state = { text: "" };
  handleChange = debounce((e) => {
    this.setState({ text: e.target.value });
  }, 1000);
  render() {
    return (
      <div className="col-lg-4">
        <input onChange={this.handleChange} /><br/><br/>
        <textarea value={this.state.text} /><br/>
      </div>
    );
  }
}
