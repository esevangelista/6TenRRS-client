import React, { Component } from 'react';
import {BrowserRouter,Route, Switch,Link} from 'react-router-dom';
import axios from 'axios';
import { Grid } from 'semantic-ui-react';

import Login from './pages/auth';
import Sidebar from './components/Sidebar'
import Home from './pages/Home';
import Transaction from './pages/TransactionsContent';
import Customer from './pages/CustomerInfoContent';
import Product from './pages/ProductContent';
import Branch from './pages/BranchContent'
import Stock from './pages/StockContent';
import Promo from './pages/PromoContent';
import PromoStar from './pages/PromoStarContent';
import Reward from './pages/RewardsContent';

class App extends Component {   
  render(){
    return (
      <div>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/transactions" component={Transaction} />
                <Route exact={true} path="/customer" component={Customer} />
                <Route exact={true} path="/branch" component={Branch} />
                <Route exact={true} path="/product" component={Product} />
                <Route exact={true} path="/stock" component={Stock} />
                <Route exact={true} path="/promo" component={Promo} />
                <Route exact={true} path="/promostar" component={PromoStar} />
                <Route exact={true} path="/reward" component={Reward} />
              </Switch>
        </BrowserRouter>

      </div>
    );
  }
}  
export default App;
