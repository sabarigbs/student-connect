import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button 
                    type={this.props.type}
                    id = {this.props.id} 
                    className={this.props.className} 
                    onClick={this.props.onClick}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default Button;
