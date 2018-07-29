import React, { Component } from 'react';
import Input from '../InputComponent/Input';
import Button from '../ButtonComponent/Button';
import Alert from '../Alert/Alert';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      old:'',
      new:'',
      role: 'student',
      isUserVerified: false,
      isLoginSuccessful: false,
      errorText: '',
      passwordUpdateFlag:false
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleOldPasswordChange = this.handleOldPasswordChange.bind(this);
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
    
  }



  handleNameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleOldPasswordChange(event) {
    this.setState({ old: event.target.value });
  }

  handleNewPasswordChange(event) {
    this.setState({ new: event.target.value });
  }

  handleUpdateClick(){
    fetch("http://localhost:3001/passwordUpdate", {
      method: 'POST',
      body: JSON.stringify({
        "old": this.state.old,
        "password": this.state.password,
        "role": this.state.role
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then((res) => res.json())
      .catch(function (err) {
        console.log(err);
      })
      .then((response) => {
        if (response) {
          if (response['success'])
            this.setState({isLoginSuccessful:true});
        } else {
          this.setState({
            errorText: "Server Error"
          })
        }
      });

  }



  handleNextClick(event) {

    
    if (this.state.username === "") {
      this.setState({ errorText: "Username must be filled" });
      return;
    }

    fetch("/", {
      method: 'POST',
      body: JSON.stringify({
        "username": this.state.username,
        "role": this.state.role
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then((res) => res.json())
      .catch(function (err) {
        console.log(err);
      })
      .then((response) => {
        if (response) {
          if (response['success'])
            this.setState({
              isUserVerified: true
            });
        } else {
          this.setState({
            errorText: "Server Error"
          })
        }
      });

  }

  handleSubmitClick(event) {

    
    if (this.state.password === "") {
      this.setState({ errorText: "Password must be filled" });
      return;
    }

    fetch("http://localhost:3001/password", {
      method: 'POST',
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password,
        "role": this.state.role
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
      .then((res) => res.json())
      .catch(function (err) {
        console.log(err);
      })
      .then((response) => {
        if (response) {
          if (response['success'])
            this.setState({isLoginSuccessful:true});
        } else {
          this.setState({
            errorText: "Server Error"
          })
        }
      });


  }

  toggleLogin() {

    this.setState((prevState, props) => ({
      role: (prevState.role === 'student') ? 'faculty' : 'student'
    }));

  }

  updatePassword(){

    this.setState({passwordUpdateFlag:true});
    

  }


  render() {

    return (
      <div className="form">

        <img src="../../../images/klogotrans.png" width="35%" height="20%" alt="logo"></img>
        <p class="h3">Student Connect</p>
        
        {this.state.errorText && <Alert class="alert alert-danger" text={this.state.errorText} />}

        <Input name="Username" type="text" placeholder="Enter your username" onChange={this.handleNameChange} />

        {this.state.isUserVerified && <Input name="Password" type="password" placeholder="Enter your password" onChange={this.handlePasswordChange} />}
        {!this.state.isUserVerified && <Button class="btn btn-primary" name="Next" onClick={this.handleNextClick} />}
        {this.state.isUserVerified && <Button class="btn btn-primary" name="Login" onClick={this.handleSubmitClick} />}

        {this.state.passwordUpdateFlag && <Input name="Old Password" type="password" placeholder="Enter your old password" onChange={this.handleOldPasswordChange} />}
        {this.state.passwordUpdateFlag && <Input name="New Password" type="password" placeholder="Enter your new password" onChange={this.handleNewPasswordChange} />}
        {this.state.isUserVerified && <Button class="btn btn-primary" name="Update" onClick={this.handleUpdateClick} />}


        <p class="loginToggler" onClick={this.toggleLogin}>Not {this.state.role}?</p>
        <p class="loginToggler" onClick={this.updatePassword}>Update Password</p>

      </div>
    )
  }
};
