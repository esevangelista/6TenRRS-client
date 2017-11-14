//PromoForm.js

import React, {Component} from 'react';
import './Pagecomponents.css';

class BranchForm extends Component {
	render(){
		return(
			<div className="divDesign">
				<label className="whiteText"> PromoForm </label>
				<Textbox
					label_value="This is a Textbox" 
					/>
				<Button 
					label_value="This is a Button"
					button_text="Search"
					/>
				<TextArea
					label_value="This is Where the results will output"
					/>
			</div>
		)
	}
}

class Textbox extends Component {
	render(){
		const label_value = this.props.label_value;
		return(
			<div>
				<label className="whiteText">{label_value}</label>
				<input type="text" className="textbox"
					/>
			</div>
		);
	}
}

class Button extends Component {
	render(){
		const {label_value, button_text} = this.props;
		return(
			<div>
				<label className="whiteText">{label_value}</label>
				<input type="button" className="button" 
					value={button_text}
					/>
			</div>
		)
	}
}

class TextArea extends Component {

	render(){
		const {label_value} = this.props;
		return(
			<div>
				<label className="whiteText">{label_value}</label>
				<input type="text"
					className="textArea" 
					/>
			</div>
		)
	}
}

export default BranchForm;