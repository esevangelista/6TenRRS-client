import React, {Component} from 'react';
import './Pagecomponents.css'

const passer = (anything) => {
	return anything;
}


class SideBar extends Component {

	/* Current content allowable values
		1 - Customer Info
		2 - Promo
		3 - Product
		4 - Branch
		5 - Rewards
		6 - Transactions
		7 - View Points
	 */

	// constructor(props){
	// 	super(props)

	// 	this.state={
	// 		current_content:"Customer Info"
	// 	}

	// 	this.handleContentChange = this.handleContentChange.bind(this);
	// }

	// handleContentChange(e){
	// 	this.setState({current_content: value})
	// }

	render(){
		return(
			<div class="page-sidebar">
				<Button 
				button_text="610 Rewards"
				classname="topButton"/>
				<About />
				<p class="smallWhiteText">Navigation</p>
				<Button 
				button_text="Customer Info"
				classname="navButton"/>
				<Button 
				button_text="Promo"
				classname="navButton"/>
				<Button 
				button_text="Product"
				classname="navButton"/>
				<Button 
				button_text="Branch"
				classname="navButton"/>
				<Button 
				button_text="Rewards"
				classname="navButton"/>
				<Button 
				button_text="Transactions"
				classname="navButton"/>
				<Button 
				button_text="View points"
				classname="navButton"/>
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

class Button extends Component {
	render(){
		const {button_text, classname} = this.props;
		// const setContent = () => {}
		return(
			<div>
				<input type="button" class={classname} 
					value={button_text}
					/>
			</div>
		)
	}
}

export default SideBar;
