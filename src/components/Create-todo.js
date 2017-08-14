'use strict';

import React, { Component } from 'react';

export default class CreateTodo extends Component {


  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="todos" ref="createInput"/>
        <button>Create</button>
      </form>
    );
  }

  handleCreate(evt) {
    evt.preventDefault();

    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
    console.log(this.props.createTask);
  }
}

