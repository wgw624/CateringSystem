import React from 'react';
import ReactDom from 'react-dom';
import Index from './components/index';
import List  from './components/list';
import PCHeader from './components/pc_head';
import PCFooter from './components/pc_footer';
import Login from './components/login';

import { BrowserRouter as Router, Route,Link,Redirect } from 'react-router-dom';

class Root extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <PCHeader />
            <Route path="/" exact component={Login}></Route>
            <Route path="/index" exact component={Index}></Route>
            <Route path="/list" component={List}></Route>
            <Redirect path="/" component={List}></Redirect>
            <PCFooter />
          </div>
        </Router>

      </div>
    )
  }
}

ReactDom.render(<Root/>,document.getElementById("root"));
