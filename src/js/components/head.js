import React from 'react';
import ReactDom from 'react-dom';
import HeadCss from '../../css/headCss.css';
import { Menu, Dropdown, Button } from 'antd';
import {Link} from 'react-router-dom';


//var HeadCss = require("../../css/headCss.css");

export default class ComponentHead extends React.Component{
  changeBodyContent(){
      alert(123)
  }
  render(){
    const SubMenu = Menu.SubMenu;
    const menu = (
            <Menu>
              <Menu.Item>
                <a rel="noopener noreferrer" href="#" onClick={this.changeBodyContent.bind(this)} >改变body内容</a>
              </Menu.Item>
              <SubMenu title="sub menu">
                <Menu.Item><Link to="/">Home</Link></Menu.Item>
                <Menu.Item><Link to="/list">页面ist</Link></Menu.Item>
              </SubMenu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">打开新页面</a>
              </Menu.Item>
            </Menu>
          );

    return(
      <div className={HeadCss.headMenuDiv}>
        <Dropdown overlay={menu} placement="bottomLeft" className={HeadCss.headMenu}>
          <Button>我的菜单1</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomLeft" className={HeadCss.headMenu}>
          <Button>我的菜单2</Button>
        </Dropdown>
        <Dropdown overlay={menu} placement="bottomLeft" className={HeadCss.headMenu}>
          <Button>我的菜单3</Button>
        </Dropdown>
      </div>
    )
  }
}
