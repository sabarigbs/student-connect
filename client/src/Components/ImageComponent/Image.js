import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.src}
                alt={this.props.alt}
                className={this.props.className}
                ></img>
            </div>
        );
    }
}

export default Image;
