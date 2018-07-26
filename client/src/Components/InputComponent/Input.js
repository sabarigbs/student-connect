import React, { Component } from 'react';
import './Input.css';


export default class Input extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="form-label" >{this.props.name}</label>
        <input className="form-control" placeholder={this.props.placeholder} onChange={this.props.onChange} type={this.props.type}></input>
      </div>
    )
  }
};
