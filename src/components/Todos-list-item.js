'use strict';

import React, { Component } from 'react';

export default class TodosListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderActionSection() {
    if(this.state.isEditing) {
      return (
      <td>
        <button>Save</button>
        <button onClick={this.onCanclClick.bind(this)}>Cancel</button>
      </td>
      );
    }
    return (
       <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
      </td>
    );

  }

  render() {
    return (
      <tr>
        <td>{this.props.task}</td>
        {this.renderActionSection()}
      </tr>
    );
  }

  onEditClick() {
  this.setState({ isEditing: true });
  }

  onCanclClick() {
  this.setState({ isEditing: false });
  }
}

