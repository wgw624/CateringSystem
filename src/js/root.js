import React from 'react';
import ReactDom from 'react-dom';
import Index from './index';
import Login from './components/login';
import ComponentList from './components/list';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

class Root extends React.Component{
  render(){
    return(
        <Router >
            <div>
              <Route component={Login} path="/" >
              </Route>
              <Route component={ComponentList } path="/list" >
              </Route>
            </div>
        </Router>

    )
  }
}

ReactDom.render(<Root/>,document.getElementById("root"));