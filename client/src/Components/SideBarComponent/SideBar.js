import React, { Component } from 'react';
import Image from '../ImageComponent/Image';
import ProfileInfo from '../ProfileInfoComponent/ProfileInfo';

class SideBar extends Component {
    render() {
        return (
            
                <div className="sidebar">

                   
                        <Image 
                        src="../../../images/profile.png"
                        className="responsive-img circle"/>

                        <ProfileInfo
                        username="Sabari Govindarajan"
                        rollno="15CSR174"
                        department="Computer Science and Engineering"
                        year="Final"
                        section="C"
                        
                        />
                    

                </div>
           
        );
    }
}

export default SideBar;
