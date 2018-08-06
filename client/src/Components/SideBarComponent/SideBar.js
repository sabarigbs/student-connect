import React, { Component } from 'react';
import Image from '../ImageComponent/Image';
import ProfileInfo from '../ProfileInfoComponent/ProfileInfo';

class SideBar extends Component {

    render() {
        return (
            
            <div className="sidebar">

                <div className="sidebar-content-wrapper">

                    <div className="profile-pic">
                        <Image
                        src="../images/profile.png" 
                        alt="profile"
                        />
                    </div>

                
                    <ProfileInfo className="profile-info"
                        username={this.props.username}
                        rollno={this.props.rollno}
                        // department="Department of Computer Science and Engineering"
                        // year="Final Year"
                        // section="C"
                    />
                    
                </div>

            </div>

        );
    }
}

export default SideBar;
