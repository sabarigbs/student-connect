import React, { Component } from 'react';

export default class Alert extends Component {
  render() {
    return (
      <div className={this.props.class}>
        {this.props.text}
      </div>
    )
  }
};
