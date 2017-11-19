import React, {Component} from 'react';
import { Route } from "react-router-dom";
// import { Link } from 'react-router'
import './Pagecomponents.css'

import Home from './pages/Home'
import CustomerInfoContent from './pages/CustomerInfoContent'
import PromoContent from './pages/PromoContent'
import ProductContent from './pages/ProductContent'
import RewardsContent from './pages/RewardsContent'
import TransactionsContent from './pages/TransactionsContent'
import BranchContent from './pages/BranchContent'
import ViewPointsContent from './pages/ViewPointsContent'


class Content extends Component{
	render(){
		return(
			<div class="contentHolder">
				<Route exact path="/" component={Home}/>
            	<Route path="/customerinfo" component={CustomerInfoContent} />
            	<Route path="/promo" component={PromoContent} />
            	<Route path="/product" component={ProductContent} />
            	<Route path="/rewards" component={RewardsContent} />
            	<Route path="/transactions" component={TransactionsContent} />
            	<Route path="/branch" component={BranchContent} />
            	<Route path="/viewpoints" component={ViewPointsContent} />
			</div>
		)
	}
}

export default Content;