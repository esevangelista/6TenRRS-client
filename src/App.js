import React, { Component } from 'react';
import {BrowserRouter,Route, Switch,Link} from 'react-router-dom';
import Login from './pages/auth';
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import Customer from './pages/Customer';
import axios from 'axios';
import { Grid } from 'semantic-ui-react'
import Sidebar from './components/Sidebar'

class App extends Component {   

  render(){
    return (
      <div>
        <BrowserRouter >
          <Switch>
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/transactions" component={Transaction} />
            <Route exact={true} path="/customer" component={Customer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}  
export default App;
