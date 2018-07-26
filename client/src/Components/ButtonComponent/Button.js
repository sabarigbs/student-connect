import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    return (
      <div>
        <button className={this.props.class} onClick={this.props.onClick}>{this.props.name}</button>
      </div>
    )
  }
};
