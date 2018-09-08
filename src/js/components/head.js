import React from 'react';
import ReactDom from 'react-dom';
//import HeadCss from '../../css/headCss.css';
var HeadCss = require("../../css/headCss.css");

export default class ComponentHead extends React.Component{
  render(){
    return(
      <div className={HeadCss.bgColor}>
        Hello World!!
      </div>
    )
  }
}
