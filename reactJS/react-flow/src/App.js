/* @flow */
import React, { Component } from "react";
import TodoList from "./components/TodoList";

import logo from "./logo.svg";
import "./App.css";

type Todo = {
  id: number,
  title: string,
  description: string
};

type State = {
  todos: Array<Todo>,
  counter: number
};

class App extends Component<null, State> {
  state = {
    todos: [
      {
        id: 1,
        title: " make cake lemmon",
        description: "with minimum morning"
      }
    ],
    counter: 2
  };
  handleSubmit = (todo: Todo) => {
    console.log("handleSubmit");
  };

  render() {
    const name: number = 1;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {name}
            Welcome to React
          </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code> src / App.js </code> and save to reload.
        </p>
        <TodoList
          todoList={this.state.todos}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
