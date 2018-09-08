import React from 'react';
import ReactDom from 'react-dom';
import ComponentHead from './components/head.js';

class Index extends React.Component{
  render(){
    return(
      <div>
        <ComponentHead />
      </div>
    )

  }
}

ReactDom.render(
  <Index />,
  document.getElementById("root1")
)
