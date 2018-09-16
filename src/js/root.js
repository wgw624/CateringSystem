import React from 'react';
import ReactDom from 'react-dom';
import Index from './components/index';

import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

class Root extends React.Component{
  render(){
    return(
      <div>
          <Index />

      </div>
    )
  }
}

ReactDom.render(<Root/>,document.getElementById("root"));
