'use strict';

import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
    }

    renderError() {
      if(!this.state.error) { return null; }
      return <div style={{ color: 'red' }}>{this.state.error}</div>
    }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="todos" ref="createInput"/>
        <button>Create</button>
          {this.renderError()}
      </form>
    );
  }

  handleCreate(evt) {
    evt.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if(validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
    console.log(this.props.createTask);
  }

  validateInput(task) {
    if(!task) {
      return 'Please Enter a Task'
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return 'Task already exist(s)'
    } else {
      return null;
    }
  }
}

