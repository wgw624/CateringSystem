import React from 'react';
import ReactDom from 'react-dom';
import PCHeader from './pc_head';
import PCFooter from './pc_footer';

export default class Index extends React.Component{
  render(){
    return(
      <div>
        <PCHeader />
        <PCFooter />
      </div>
    )
  }
}
