import React, { Component } from 'react';

class ProfileInfo extends Component {
    render() {
        return (
            <div className="profile-details">
                
                <h6>{this.props.username}</h6>
                <h6>{this.props.rollno}</h6>
                <h6>{this.props.department}</h6>
                <h6>{this.props.year}</h6>
                <h6>{this.props.section}</h6>

            </div>
        );
    }
}

export default ProfileInfo;
