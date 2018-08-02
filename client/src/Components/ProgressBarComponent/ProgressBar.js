import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="indeterminate"></div>
            </div>
        );
    }
}

export default ProgressBar;
