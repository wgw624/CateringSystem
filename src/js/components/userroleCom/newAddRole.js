import {Modal,Button,Input,Radio,Select } from 'antd';
import React from 'react';
const Option = Select.Option;
const RadioGroup = Radio.Group;
export default class NewAddRole extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading:false,
      visible:this.props.isShow,
      name:'管理员',
      describe:'管理员权限',
      roleAuth:'角色权限'
    }
  }
  componentWillReceiveProps(props){
    if(props.isEdit){
      this.getRoleById(props.roleId);
    }

  }
  getRoleById(roleId){
    var url="http://localhost:8080/roleController/getRoleById?roleId="+roleId;
    fetch(url).then(response=>{
      return response.json();
    }).then(data=>{
      var ds = data.data;
      if(ds!=null || ds!=undefined){
        this.setState({
          name:ds.name,
          describe:ds.describe,
          visible:this.props.isShow,
        })
      }

    })
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
  handleOk = () => {
    this.setState({ loading: true });
    var url = "http://localhost:8080/roleController/saveRole";
    var data1={
            name:this.state.name,
            describe:this.state.describe,
            id:this.props.roleId,
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
      this.props.reloadAllRole();
    }).catch(error=>{
      alert(error);
    })

    this.setState({ loading: false, visible: false });

  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render(){
      return (
        <div>
          <span onClick={this.showModal}>
            {this.props.btnName == undefined ? '新增角色' : this.props.btnName}
          </span>
          <Modal
            visible={this.state.visible}
            title={this.props.title ==undefined?'弹窗':this.props.title}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            destoryOnClose={true}
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
NewAddRole.defaultProps={
  roleId:'',
  isEdit:false,
  isShow:false,
}
