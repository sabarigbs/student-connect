import React, { Component } from 'react';

class SwitchComponent extends Component {
    render() {
        return (
            <div className="switch">
                <label>
                  Faculty
                  <input onClick={this.props.onClick} type="checkbox"/>
                  <span className="lever"></span>
                </label>
            </div>
        );
    }
}

export default SwitchComponent;
