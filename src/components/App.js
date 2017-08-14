'use strict';

import React, { Component } from 'react';
import TodosList from './Todos-list';
import CreateTodo from './Create-todo.js';

const todos = [
  {
    task: 'make React tut',
    isCompleted: true
  },
  {
    task: 'eat Dinner',
    isCompleted: true
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>React Todo's App</h1>
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodosList
          createTask={this.createTask.bind(this)}
          todos={this.state.todos} />
      </div>
    );
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });

    this.setState({ todos: this.state.todos }); //re-render the array
  }
}

