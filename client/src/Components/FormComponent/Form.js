import React, { Component } from 'react';
import Input from '../InputComponent/Input';
import Button from '../ButtonComponent/Button';
import ProgressBar from '../ProgressBarComponent/ProgressBar';
import SwitchComponent from '../SwitchComponent/SwitchComponent';



class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            role:'students',
            isUserVerified: false
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.makeNetworkCall = this.makeNetworkCall.bind(this);
        
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

    handleToggle(event){
        if(event.target.checked)
            this.setState({role:'staffs'});
        else
            this.setState({role:'students'});
        
    }

    handleUsernameChange(event) {
        console.log('user');

        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        console.log('password');
        this.setState({ password: event.target.value });
    }

    handleNextClick(event) {

        event.preventDefault();


        let endPoint;
        let method;
        let body = {};

        endPoint = 'http://localhost:3001/';
        method = 'POST';
        body = {
            username: this.state.username,
            role:this.state.role
        };

        let responseFromAPI = this.makeNetworkCall(endPoint, method, body);

        responseFromAPI
        .then((res) => res.json())
        .catch((err) => console.log(err))
        .then((response) => {
            // if (response['success'])
            //     this.setState({ isUserVerified: true });
            console.log(response);
            
        })


    }


    handleSubmitClick(event) {

        event.preventDefault();


        let endPoint;
        let method;
        let body = {};

        endPoint = 'http://localhost:3001/password';
        method = 'POST';
        body = {
            username: this.state.username,
            password: this.state.password
        };

        let responseFromAPI = this.makeNetworkCall(endPoint, method, body);

        responseFromAPI
        .then((res) => res.json())
        .catch((err) => console.log(err))
        .then((response) => {
            if (response['success'])
                this.setState({ isLoginSuccessful: true });

        })


    }


render() {

    const isUserVerified = this.state.isUserVerified;
    let input;
    let passwordInput;
    let button;

    if (!isUserVerified) {

        input = <Input
            id="username"
            name="Username"
            type="text"
            className="validate"
            onChange={this.handleUsernameChange} />

        passwordInput = null;

        button = <Button
            id="next"
            className="btn btn-center"
            text="Next"
            onClick={this.handleNextClick} />
    } else {

        input = null;
        passwordInput = <Input
            id="password"
            name="Password"
            type="password"
            className="validate"
            onChange={this.handlePasswordChange} />

        button = <Button
            type="submit"
            id="login"
            className="btn btn-center"
            text="Login"
            onClick={this.handleSubmitClick} />
    }

    return (
        
            <div class="container">
        
            <ProgressBar/>

            <div className="form-wrapper ">

                
                <form>
                    
                    <div>
                        <h5>Student Connect</h5>
                    </div>
                    {input}
                    {passwordInput}
                    {button}
                </form>

                <SwitchComponent onClick={this.handleToggle}/>
                

            </div>

        </div>
    
        

    );
}
}

export default Form;
