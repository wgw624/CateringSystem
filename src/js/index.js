import React from 'react';
import ReactDom from 'react-dom';
import ComponentHead from './components/head.js';
import BodyContent from './components/bodyContent';

export default class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHead />
        <BodyContent />
      </div>
    )

  }
}
