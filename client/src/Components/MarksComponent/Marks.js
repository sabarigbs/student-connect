import React, { Component } from 'react';
import NavBar from '../NavBarComponent/NavBar';
import SideBar from '../SideBarComponent/SideBar';
import MainContent from '../MainContentComponent/MainContent';

class Marks extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                
                <div className="content">
                    <SideBar/>
                    <MainContent/>    
                </div>
            </div>
        );
    }
}

export default Marks;
