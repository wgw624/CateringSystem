import React from 'react';
import ReactDom from 'react-dom';
import ContentData from './bodyContentData';

export default class BodyContent extends React.Component{
  render(){
    return(

        <ContentData bodyData={'react 入门程序'} />
    )
  }
}
