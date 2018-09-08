import React from 'react';
import ReactDom from 'react-dom';
import ComponentHead from './components/head.js';
import BodyContent from './components/bodyContent';

class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHead />
        <BodyContent />
      </div>
    )

  }
}

ReactDom.render(
  <Index />,
  document.getElementById("root1")
)
