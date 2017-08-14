'use strict';

import React, { Component } from 'react';
import _ from 'lodash';
import TodosListItem from './Todos-list-item';
import TodosListHeader from './Todos-list-header';

export default class TodosList extends Component {
  renderItems() {
    return _.map(this.props.todos, (todo, i) =>
      <TodosListItem key = {i} {...todo} />)
  }

  render() {
    console.log(this.props.todos);

    return (
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}

