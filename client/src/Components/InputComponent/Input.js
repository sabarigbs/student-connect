import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className="input-field col s6">
               
                <input 
                id={this.props.id} 
                type={this.props.type} 
                className={this.props.className} 
                placeholder={this.props.placeholder}
                onChange={this.props.onChange}></input>
                
                <label 
                htmlFor={this.props.id}>
                {this.props.name}
                </label>
            
            </div>
        );
    }
}

export default Input;
