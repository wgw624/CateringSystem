import React from 'react';
import ReactDom from 'react-dom';
import HeadCss from '../../css/headCss.css';
import { Menu, Dropdown, Button,Row,Col,Icon  } from 'antd';
import {Link,Redirect} from 'react-router-dom';

//var HeadCss = require("../../css/headCss.css");
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class PCHeader extends React.Component{
  constructor(props){
    super(props);
  }
  state={
    current:'singleWork',
    isLogin:this.props.isLogin,
    showName:sessionStorage.getItem("showName")
  }
  handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });

    }
changeBodyData(data,e){
  alert(3333)

}
changeBodyData1(data,e){
  alert(444)
}
onchangeBody(){
  alert(888)
}
loginOut(e){
  alert(123321)
  this.props.history.push('/');
}
  render(){

    const SubMenu = Menu.SubMenu;
    const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={this.props.loginFun.bind(this,'modifyPassword')}>修改密码</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" onClick={this.props.loginFun.bind(this,'loginOut')}>退出</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">天猫</a>
    </Menu.Item>
  </Menu>
);
    return(

      <header style={{height:76,}}>

        <Row>
          <Col span={4}>
            <a className="logo">
              <img src="/src/img/logo.png"/>
              <span>电子公文系统</span>
            </a>
          </Col>
          <Col span={18}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}  mode="horizontal">

              <SubMenu title={<span><Icon type="appstore" key="singleWork" />个人工作台</span>}>
                 <MenuItemGroup title="Item 1">
                   <Menu.Item key="myWork" onClick={this.props.onchangeBody.bind(this,'myWork')}>我的工作台</Menu.Item>
                   <Menu.Item key="officeCheck" onClick={this.props.onchangeBody.bind(this,'officeCheck')}>办公厅核稿</Menu.Item>
                 </MenuItemGroup>
                 <MenuItemGroup title="用户信息">
                  <Menu.Item key="userManage" onClick={this.props.onchangeBody.bind(this,'userManage')}>用户管理</Menu.Item>
                  <Menu.Item key="roleManage" onClick={this.props.onchangeBody.bind(this,'roleManage')}>角色管理</Menu.Item>

                 </MenuItemGroup>
               </SubMenu>
               <SubMenu title={<span><Icon type="appstore" key="myIncoming"  />我的收文</span>} >
                  <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:11" onClick={this.props.onchangeBody.bind(this,'myWaitTodo')} >我的代办</Menu.Item>
                    <Menu.Item key="queryAllUser1" onClick={this.props.onchangeBody.bind(this,'queryAllUser')}>我的已办</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:33">Option 3</Menu.Item>
                    <Menu.Item key="setting:44">Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              <Menu.Item key="businessManage" >
                <Icon type="appstore" />业务管理
              </Menu.Item>
              <Menu.Item key="sysManage" >
                <Icon type="appstore" />系统管理
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}>
            <Dropdown overlay={menu}>
             <a className="ant-dropdown-link" href="#">
               {this.state.showName}<Icon type="down" />
             </a>
            </Dropdown>

          </Col>
        </Row>
      </header>
    )
  }
}
