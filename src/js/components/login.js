import React from 'react';
import ReactDOM from 'react-dom';
import {Form,Icon, Input, Button, Checkbox } from 'antd';
import {Redirect} from 'react-router-dom';
import LoginCss from '../../css/pc_login.css';
export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      psd:'',
      username:'admin',
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
    // alert('A name was submitted: ' + this.state.username+this.state.psd);
    // e.preventDefault();
    // return (<Redirect to="/index" />);
     // this.context.router.history.push('/index');
     var url =  "http://localhost:8080/userInfController/login?username="+this.state.username+"&password="+this.state.psd;
     fetch(url).then(response=>{
       return response.json();
     }).then(data=>{
       if(data.isLogin == true){
         // this.props.history.push('/index')
         <Redirect to={'/default'}/>
       }else{
         alert("登陆失败")
       }
     }).catch(error=>{
       alert("请求出错")
     })
  }

  render(){
    return(
      <div className={LoginCss.loginDiv}>
        <div className={LoginCss.loginForm}>
          <h1 className={LoginCss.loginH1}>Login</h1>
          <form onSubmit={this.handleSubmit}>
          <div className={LoginCss.logInpDiv}>
            <input type="text" value={this.state.username} onChange={this.handleUsername} placeholder="用户名" className={LoginCss.loginInp} />
          </div>
          <div className={LoginCss.logInpDiv}>
            <input className={LoginCss.loginInp}  type="password" value={this.state.psd} onChange={this.handlePassword} placeholder="密码" />
          </div>
          <div className={LoginCss.logInpDiv}>
            <Checkbox className={LoginCss.loginCheck}>记住密码</Checkbox>
          </div>
          <div>
            <input type="submit" value="Submit" className={LoginCss.submitBtn} />
          </div>

          </form>
        </div>
      </div>
    )
  }
}
