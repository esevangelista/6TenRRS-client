//CustomerInfoForm.js

import React, {Component} from 'react';
import './Pagecomponents.css';

class CustomerInfoForm extends Component {
	render(){
		return(
			<div>
				<Textbox />
			</div>
		)
	}
}

class Textbox extends Component {
	render(){
		return(
			<div>
				<label> This is a textbox </label>
				<input type="text" className="textbox"
				/>
			</div>
		);
	}
}

class Button extends Component {
	render(){
		return(
			<div>
				<label> This is a Button </label>
				<input type="button" classname=""
		)
	}
}

export default PageComponents;