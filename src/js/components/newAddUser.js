import {Modal,Button,Input,Radio,Select } from 'antd';
import React from 'react';

export default class NewAddUser extends React.Component{

  constructor(props){
    super(props);
    this.state={
      loginUserName:'ym',
      showUserName:'杨幂',
      telePhone:'888',
      jobNum:'3434',
      password:'11',
      surePassword:'11',
      sex:'男',
    }
  }
  state={
    loading:false,
    visiable:false,
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
    var url = "http://localhost:8080/roleController/getAllRole";
    fetch(url).then(response=>{
      return response.json();
    }).then(data=>{
      for(var i=0;i<data.role.length;i++){
        // alert(data.role[i].name)
      // this.state.allRoleOpt.push(<Option key={data.role[i].roleId}>{data.role[i].name}</Option>);
      }

    })
    this.setState({
      visible: true,
    });
  }
  componentWillMount(){

  }
  componentDidMount(){

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
            roleId:'45678',
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

    }).catch(error=>{
      alert(error);
    })
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  selectRole(value) {
    //alert(value)
    console.log(`selected ${value}`);
  }
  render(){
    const { visible, loading } = this.state;
    const RadioGroup = Radio.Group;
    const Option = Select.Option;
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
      return (
        <div>
          <p onClick={this.showModal}>
            {this.props.btnName == undefined ? '新增用户' : this.props.btnName}
          </p>
          <Modal
            visible={visible}
            title={this.props.title ==undefined?'弹窗':this.props.title}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>Return</Button>,
              <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
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
          <Select mode="tags" style={{ width: '100%' }} onChange={this.selectRole.bind(this)} tokenSeparators={[',']}>
            {children}
          
          </Select>,
        </p>
        <p>
            <Input placeholder="电话号码" value={this.state.telePhone}  onChange={this.telePhone}  />
        </p>
        <p>
            <Input placeholder="用户工号" value={this.state.jobNum}  onChange={this.jobNum} />
        </p>
        <p>
          <Input placeholder="角色" />
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
