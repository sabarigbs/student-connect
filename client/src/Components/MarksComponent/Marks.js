import React, { Component } from 'react';
import NavBar from '../NavBarComponent/NavBar';
import SideBar from '../SideBarComponent/SideBar';
import MainContent from '../MainContentComponent/MainContent';

class Marks extends Component {

    constructor(props){
        super(props);

        this.state = {
            studentName : '',
            rollno : '',
            marks:[]
        }
    
        this.makeNetworkCall = this.makeNetworkCall.bind(this);
        this.fetchMarks = this.fetchMarks.bind(this);
        
    }

    componentDidMount(){
        this.fetchMarks();
    }

    makeNetworkCall(endPoint, method, body) {
        console.log(endPoint);
        return fetch(endPoint, {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(body)

        })


    }

    fetchMarks(){

        let endPoint;
        let method;
        let body = {};

        endPoint = 'http://localhost:3001/viewMarks';
        method = 'POST';
        body = {
            username: this.props.username,
        };

        let responseFromAPI = this.makeNetworkCall(endPoint, method, body);

        responseFromAPI
        .then((res) => res.json())
        .catch((err) => console.log(err))
        .then((response) => {
            
            if (response['success'])
                this.setState({ studentName:response['studentName'],rollno:response['rollno'],marks:response['marks'] });
            //console.log(response['rollno']);
            console.log(this.state.rollno);

            
        })
    }


    render() {
        return (
            <div>
                <NavBar/>
                
                <div className="content">
                    <SideBar 
                        username = {this.state.studentName}
                        rollno = {this.state.rollno}
                    />
                    <MainContent
                        marks = {this.state.marks}
                    />    
                </div>
            </div>
        );
    }
}

export default Marks;
