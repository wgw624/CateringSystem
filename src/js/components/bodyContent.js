import React from 'react';
import ReactDom from 'react-dom';
import ContentData from './bodyContentData';


export default class BodyContent extends React.Component{
  render(){
    return(
      <div>
        <ContentData ref='contData' />
      </div>
    )
  }
}
