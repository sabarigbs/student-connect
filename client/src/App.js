import React, { Component } from 'react';
import Form from './Components/FormComponent/Form';
import Marks from './Components/MarksComponent/Marks';




class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoginSuccessful : false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(isLoginSuccessful,username){
    console.log("App " + isLoginSuccessful);
    this.setState({username,isLoginSuccessful});
  }

  render() {

    let appContent;
    if(!this.state.isLoginSuccessful)
      appContent = <Form onSubmit={this.onFormSubmit}/>;
    else
      appContent = <Marks username = {this.state.username}/>
    
    return (
      <div>
         {appContent}
      </div>
    );
  }
}

export default App;
