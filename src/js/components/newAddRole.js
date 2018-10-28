import {Modal,Button,Input,Radio,Select } from 'antd';
import React from 'react';
const Option = Select.Option;
const RadioGroup = Radio.Group;
export default class NewAddRole extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading:false,
      visiable:false,
      name:'管理员',
      describe:'管理员权限',
      roleAuth:'角色权限'
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  roleName=(e)=>{

    this.setState({name:e.target.value})
  }
  roleDesc=(e)=>{
    this.setState({describe:e.target.value});
  }
  roleAuth=(e)=>{
    this.setState({roleAuth:e.target.value})
  }
  componentWillMount(){

  }
  componentDidMount(){

  }

  handleOk = () => {
    this.setState({ loading: true });
    var url = "http://localhost:8080/roleController/saveRole";
    var data1={
            name:this.state.name,
            describe:this.state.describe,
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

  render(){
      return (
        <div>
          <p onClick={this.showModal}>
            {this.props.btnName == undefined ? '新增角色' : this.props.btnName}
          </p>
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
                  <Input placeholder="角色名" value={this.state.name} onChange={this.roleName} />
              </p>
              <p>
                  <Input placeholder="角色描述" value={this.state.describe}  onChange={this.roleDesc} />
              </p>
              <p>
                  <Input placeholder="角色权限" value={this.state.roleAuth}  onChange={this.roleAuth} />
              </p>

            </div>

          </Modal>
        </div>
      );
    }

}
