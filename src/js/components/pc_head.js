import React from 'react';
import ReactDom from 'react-dom';
import HeadCss from '../../css/headCss.css';
import { Menu, Dropdown, Button,Row,Col,Icon  } from 'antd';
import {Link} from 'react-router-dom';

//var HeadCss = require("../../css/headCss.css");

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
              <Menu.Item key="singleWork" >
                <Icon type="appstore" />个人工作台
              </Menu.Item>
              <Menu.Item key="myIncoming" >
                <Icon type="appstore" />我得收文
              </Menu.Item>
              <Menu.Item key="myOutgoing" >
                <Icon type="appstore" />我得发文
              </Menu.Item>
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
