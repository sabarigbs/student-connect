import React, { Component } from 'react';
import Form from './Components/FormComponent/Form';
import Marks from './Components/MarksComponent/Marks';




class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoginSuccessful : false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(isLoginSuccessful){
    console.log("App " + isLoginSuccessful);
    this.setState({isLoginSuccessful:!isLoginSuccessful});
  }

  render() {

    let appContent;
    if(!this.state.isLoginSuccessful)
      appContent = <Form onSubmit={this.onFormSubmit}/>;
    else
      appContent = <Marks/>
    
    return (
      <div>
         {appContent}
      </div>
    );
  }
}

export default App;
