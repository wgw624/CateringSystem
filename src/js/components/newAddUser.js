import {Modal,Button,Input } from 'antd';
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
      surePassword:'11'
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
  showModal = () => {
    var url = "http://localhost:8080/roleController/getAllRole";
    fetch(url).then(response=>{
      return response.json();
    }).then(data=>{
      for(var i=0;i<data.role.length;i++){
        // alert(data.role[i].name)
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
    var url = "http://localhost:8080/roleController/getAllRole";
    fetch(url).then(response=>{
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
  render(){
    const { visible, loading } = this.state;
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
