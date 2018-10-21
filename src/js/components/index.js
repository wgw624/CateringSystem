import React from 'react';
import ReactDom from 'react-dom';
import PCHeader from './pc_head';
import PCFooter from './pc_footer';
import BodyContent from './bodyContent';
import BodyContentData from './bodyContentData';
import IndexContent from './indexContent';
import {Link,Redirect} from 'react-router-dom';
import {Form,Icon, Input, Button, Checkbox } from 'antd';

export default class Index extends React.Component{
  constructor(){
    super();
    this.state={
      contentData:<IndexContent />,
      ds:"",
      columns:""
    }
  }
  createContentDataHtml=()=>{
      return {__html:this.state.contentData,};
  }
  changeData(){
    alert(123)
  }
  componentDidMount(){
    //验证用户是否登陆
    if(sessionStorage.getItem("showName")==undefined || sessionStorage.getItem("showName") ==""){
      this.props.history.push("/");
    }
  }
  showName(){
    alert(this.props.location.query.showName)
  }
  onchangeBody(requestId){

    if("myWaitTodo"==requestId){
      this.state.ds=[{
          key: '1',
          title: '测试文发文并签报',
          fontSize: '铁总签 2018 39 号',
          submitUser: '周杰伦'
        }, {
          key: '2',
          title: '测试编号',
          fontSize: '财综签 2018 46 号',
          submitUser: '刘德华'
        }];
        this.state.columns=[
          {title: '标题',dataIndex: 'title',key: 'title',},
          {title: '来文字号',dataIndex: 'fontSize',key: 'fontSize',},
          {title: '提交人',dataIndex: 'submitUser',key: 'submitUser',},
        ]
      this.setState({
        contentData:<BodyContentData bodyData={'我的代办'} dataSource={this.state.ds} columns={this.state.columns}  />
      })
    }else if("myWork" == requestId){
      this.setState({
        contentData:<IndexContent />
      })
    }else if("myhadFinished" == requestId){
      var url = "http://localhost:8080/userInfController/getAllUserInf";
      fetch(url).then(response=>{
        return response.json()
      }).then(data=>{
        this.state.columns=[
          {title: '姓名',dataIndex: 'showName',key: 'showName',},
          {title: '性别',dataIndex: 'sex',key: 'sex',},
          {title: '电话号码',dataIndex: 'phone',key: 'phone',},
        ]
        var dataArr = data.data;
        this.state.ds= new Array();
        for(var i=0;i<dataArr.length;i++){
          var colu={showName:dataArr[i].showName,sex:dataArr[i].sex,phone:dataArr[i].phone}
          this.state.ds[i]=colu;
        }
        var dds = this.state.ds;
        this.setState({
          contentData:<BodyContentData bodyData={'我的已办'} dataSource={dds} columns={this.state.columns} />
        })
      }).catch(error=>{
        console.log("error is ",error);
      })
    }
  };
  loginFun(requestId){
    if("loginOut" == requestId){
      sessionStorage.clear();
      this.props.history.push("/");
    }else if("modifyPassword" == requestId){
      alert("暂未开发")
    }
  }
  render(){
    return(
      <div>
        <PCHeader onchangeBody={this.onchangeBody.bind(this)} loginFun={this.loginFun.bind(this)} />
        {this.state.contentData}
        <Button type="primary" onClick={this.showName.bind(this)}>当前用户</Button>
        <PCFooter />
      </div>
    )
  }
}
