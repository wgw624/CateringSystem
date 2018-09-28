import React from 'react';
import ReactDom from 'react-dom';
import Index from './components/index';
import List  from './components/list';
import PCHeader from './components/pc_head';
import PCFooter from './components/pc_footer';
import Login from './components/login';

import { BrowserRouter, Route,Link,Redirect,Switch } from 'react-router-dom';

class Root extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogin:false,
    };
  }

  render(){
    return(
      <div className="routerDiv">
        <BrowserRouter isLogin={this.state.isLogin}>
            <Switch>
              <Route path="/" exact component={Login}></Route>
              <Route path="/index" exact component={Index}></Route>
              <Redirect path="/" component={Login}></Redirect>
            </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

ReactDom.render(<Root/>,document.getElementById("root"));
