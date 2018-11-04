import {Modal,Button,Input,Radio,Select } from 'antd';
import React from 'react';
const Option = Select.Option;
const RadioGroup = Radio.Group;
export default class NewAddUser extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading:false,
      visiable:false,
      loginUserName:'ym',
      showUserName:'杨幂',
      telePhone:'888',
      jobNum:'3434',
      password:'11',
      surePassword:'11',
      rIds:[],
      sex:'男',
      allRoleArr:[],
    }
  }

  loginUserName=(e)=>{
    this.setState({
      loginUserName:e.target.value,
    })
  }
  showUserName=(e)=>{
    this.setState({
      showUserName:e.target.value,
    })
  }
  telePhone=(e)=>{
    this.setState({
      telePhone:e.target.value,
    })
  }
  jobNum=(e)=>{
    this.setState({
      jobNum:e.target.value,
    })
  }
  password=(e)=>{
    this.setState({
      password:e.target.value,
    })
  }
  surePassword=(e)=>{
    this.setState({
      surePassword:e.target.value,
    })
  }
  changeSex=(e)=>{
      this.setState({
        sex:e.target.value
      })
  }
  showModal = () => {
    if(this.state.allRoleArr.length<1){
      var url = "http://localhost:8080/roleController/getAllRole";
      fetch(url).then(response=>{
        return response.json();
      }).then(data=>{
        for(var i=0;i<data.role.length;i++){
          this.state.allRoleArr.push(<Option key={data.role[i].id}>{data.role[i].name}</Option>);
        }
      })
    }
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    var url = "http://localhost:8080/userInfController/saveUser";
    var data="sysId=123&userName="+this.state.loginUserName+"&showName="+this.state.showUserName;
    var data1={
            userName:this.state.loginUserName,
            showName:this.state.showUserName,
            userNo:this.state.jobNum,
            phone:this.state.telePhone,
            password:this.state.password,
            rIds:this.state.rIds,
            sex:this.state.sex,
        }

    fetch(url,{
      method:"POST",
      headers:{
   　　　　//"Content-Type": "application/x-www-form-urlencoded"
          "Content-Type": "application/json"
 　　　　 },
      body:JSON.stringify(data1),
    }).then(response=>{
      return response.json();
    }).then(data=>{
      this.props.reloadAllUser();
      this.setState({loading:false,visible:false})
    }).catch(error=>{
      alert(error);
    })

  }
  handleCancel = () => {
    this.setState({ visible: false });
  }

  changeRole(value) {// 选择角色变更
    this.state.rIds = value;
  }
  render(){
      return (
        <div>
          <span onClick={this.showModal}>
            {this.props.btnName == undefined ? '新增用户' : this.props.btnName}
          </span>
          <Modal
            visible={this.state.visible}
            title={this.props.title ==undefined?'弹窗':this.props.title}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>Return</Button>,
              <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                Submit
              </Button>,
            ]}
          >
      <div>
        <p>
            <Input placeholder="登录用户名" value={this.state.loginUserName} onChange={this.loginUserName} />
        </p>
        <p>
            <Input placeholder="显示用户名" value={this.state.showUserName}  onChange={this.showUserName}  />
        </p>
        <p>
          <RadioGroup onChange={this.changeSex.bind(this)} value={this.state.sex}>
            <Radio value={'男'}>男</Radio>
            <Radio value={'女'}>女</Radio>
          </RadioGroup>
        </p>
        <p>
          <Select mode="multiple" style={{ width: '100%' }} onChange={this.changeRole.bind(this)} >
            {this.state.allRoleArr}
          </Select>
        </p>
        <p>
            <Input placeholder="电话号码" value={this.state.telePhone}  onChange={this.telePhone}  />
        </p>
        <p>
            <Input placeholder="用户工号" value={this.state.jobNum}  onChange={this.jobNum} />
        </p>
        <p>
          <Input placeholder="密码" type="password" value={this.state.password}  onChange={this.password} />
        </p>
        <p>
          <Input placeholder="确认密码" type="password" value={this.state.surePassword}   onChange={this.surePassword} />
        </p>
      </div>

          </Modal>
        </div>
      );
    }

}
