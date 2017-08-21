'use strict';

import React, { Component } from 'react';
import TodosList from './Todos-list';
import CreateTodo from './Create-todo.js';

const todos = [
  {
    task: 'make React tut',
    isCompleted: false
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
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          />
      </div>
    );
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);

    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos })
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });

    this.setState({ todos: this.state.todos }); //re-render the array
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)

    foundTodo.task = newTask;
    this.setState ({ todos: this.state.todos })
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete)
    this.setState({ todos: this.state.todos })
  }
}

