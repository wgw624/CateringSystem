import React from 'react';
import ReactDOM from 'react-dom';
import {Form,Icon, Input, Button, Checkbox } from 'antd';
export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      psd:'',
      username:'',
    }
    this.handleUsername =this.handleUsername.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e){
    this.setState({
      username:e.target.value,
    })
  }
  handlePassword(e){
    this.setState({
      psd:e.target.value
    })
  }
  handleSubmit(e){
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          用户名:
          <input type="text" value={this.state.value} onChange={this.handleUsername} />
        </label>
        <label>
          密码:
          <input type="password" value={this.state.psd} onChange={this.handlePassword} />
        </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
