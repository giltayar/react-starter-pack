import {Component} from 'react';
import React from 'react';

export default class Counter extends Component {
  constructor() {
    super()
    this.state = {counter: 0};
  }
  render() {
    return (
      <div>
        <div onClick={(() => this.setState({counter: this.state.counter - 3})).bind(this)}>-</div>
        <div>{this.state.counter}</div>
        <div onClick={(() => this.setState({counter: this.state.counter + 3})).bind(this)}>+</div>
      </div>
    );
  }
}
