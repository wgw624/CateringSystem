import React from 'react';
import ReactDom from 'react-dom';
import HeadCss from '../../css/headCss.css';
import { Menu, Dropdown, Button,Row,Col,Icon  } from 'antd';
import {Link} from 'react-router-dom';

//var HeadCss = require("../../css/headCss.css");
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class PCHeader extends React.Component{
  state={
    current:'singleWork'
  }
  handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }

  render(){
    const SubMenu = Menu.SubMenu;
    return(
      <header>
        <Row>
          <Col span={4}>
            <a className="logo">
              <img src="/src/img/logo.png"/>
              <span>电子公文系统</span>
            </a>
          </Col>
          <Col span={18}>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]}  mode="horizontal">

              <SubMenu title={<span><Icon type="appstore"  /><Link to={'/index'}>个人工作台</Link></span>}>
                 <MenuItemGroup title="Item 1">
                   <Menu.Item key="setting:1">Option 1</Menu.Item>
                   <Menu.Item key="setting:2">Option 2</Menu.Item>
                 </MenuItemGroup>
                 <MenuItemGroup title="Item 2">
                   <Menu.Item key="setting:3">Option 3</Menu.Item>
                   <Menu.Item key="setting:4">Option 4</Menu.Item>
                 </MenuItemGroup>
               </SubMenu>
               <SubMenu title={<span><Icon type="appstore"  /><Link to={'/list'}>我的收文</Link></span>}>
                  <MenuItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
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
            <a>退出</a>
          </Col>
        </Row>
      </header>
    )
  }
}
