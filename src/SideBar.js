import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import './Pagecomponents.css'


class SideBar extends Component {

	render(){

		var bgcolor = {
			white: "white"
		}

		return(
			<div class="page-sidebar">
				<NavLink to="/">
					<Button 
						button_text="610 RRS"
						classname="topButton"
						textclassname="topButtonText"/>
				</NavLink>
				<About />
				<p class="smallWhiteText">Navigation</p>
				
				<NavLink to="/customerinfo" activeClassName="active" onlyActiveOnIndex>
					<Button 
						button_text="Customer Info"
						classname="navButton"
						textclassname="navButtonText"/>
				</NavLink>
				
				<NavLink to="/promo">
					<Button 
						button_text="Promo"
						classname="navButton"
						textclassname="navButtonText"/>
				</NavLink>

				<NavLink to="/product">
					<Button 
						button_text="Product"
						classname="navButton"
						textclassname="navButtonText"/>
				</NavLink>

				<NavLink to="/branch">
					<Button 
						button_text="Branch"
						classname="navButton"
						textclassname="navButtonText"/>
				</NavLink>


				<NavLink to="/rewards">
					<Button 
						button_text="Rewards"
						classname="navButton"
						textclassname="navButtonText"/>
				</NavLink>

				<NavLink to="/transactions">
					<Button 
						button_text="Transactions"
						classname="navButton"
						textclassname="navButtonText"/>
				</NavLink>

				<NavLink to="/viewpoints">
					<Button 
						button_text="View points"
						classname="navButton"
						textclassname="navButtonText"/>
				</NavLink>
			</div>
		)
	}
}

class About extends Component {
	render(){
		return(
			<div class="about">
				<Text 
					text="By Aaron Magnaye & Erlen Evangelista"
					classname="whiteText"/> 
			</div>
		)
	}
}

class Button extends Component {

	// constructor(props){
	// 	super(props);

	// 	this.state = {
	// 		value:1
	// 	}

	// 	this.onClick = this.onClick.bind(this);
	// 	this.changeValue = this.changeValue.bind(this)
	// }

	// onClick(e){
	// 	var value = this.state.value;
	// 	this.props.state = {
	// 		content_manager:{value}
	// 	}
	// }

	// changeValue(){
	// 	this.setState({value: 3})
	// }

	render(){
		const {button_text, classname, textclassname} = this.props;
		return(
			<div class={classname}>
				<Text
					text={button_text} 
					classname={textclassname}
				/>
			</div>
		)
	}
}

class Text extends Component {
	render(){
		const {text, classname} = this.props;
		return(
			<div class={classname}>
				{text}
			</div>
		)
	}
}



export default SideBar;
