import React from 'react';
import ReactDOM from 'react-dom';
import {Form,Icon, Input, Button, Checkbox } from 'antd';
import {Redirect} from 'react-router-dom';
import LoginCss from '../../css/pc_login.css';
export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      psd:'66666',
      username:'wgw',
      isLogin:false,
      showName:"wgw",
    }
    this.handleUsername =this.handleUsername.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
componentWillReceiveProps(){
  alert(213)
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
         this.setState({isLogin:data.isLogin});
       }else{
         alert("登陆失败")
       }
     }).catch(error=>{
       alert("get 请求出错")
     })
  }
  handleSubmitPost(e){
     event.preventDefault();
    var url =  "http://localhost:8080/userInfController/login";
    var username=this.state.username;
    var password = this.state.psd;
    var data = "username="+username+"&password="+password;
    fetch(url,{
      method:'POST',
      headers:{
   　　　　"Content-Type": "application/x-www-form-urlencoded"
 　　　　 },
      body:data,
    }).then(response=>{
       return response.json();
    }).then(data=>{
      if(data.isLogin){
        this.setState({isLogin:data.isLogin});
        var showName = data.userInf.showName;
        sessionStorage.setItem("showName",showName);
        sessionStorage.setItem("userName",data.userInf.userName);
        this.props.history.push({pathname:"/index",query:{showName:"weiguangwei"}});
      }else{
        alert("账号或密码错误")
      }
    }).catch(error=>{
      alert("post 请求出错")
    })

  }
  render(){
    return(
      <div className={LoginCss.loginDiv}>
        <div className={LoginCss.loginForm}>
          <h1 className={LoginCss.loginH1}>Login</h1>
          <form onSubmit={this.handleSubmitPost}>
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
             <Button type="primary" onClick={this.handleSubmitPost.bind(this)}>登录</Button>
          </div>

          </form>
        </div>
      </div>
    )
  }
}
