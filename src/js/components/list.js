import React from 'react';
import {Route,Link} from 'react-router-dom';
import BodyContent from './BodyContent';
export default class ComponentList extends React.Component{

  render(){
    return(
      <div>
       这是List  页面
        <Link to='/content'  >请求Body数据</Link>
      </div>
    )
  }
}
