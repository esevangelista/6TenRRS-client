import React, {Component} from 'react';
import './Pagecomponents.css'

class HeaderBar extends Component {
	render(){
		return(
			<div class="header">
				<Textbox />
				<Button 
					button_text="Search"
					classname="searchButton"
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
				<input type="text"
					class="textbox"
					placeholder="Type Search Item . . ."
					/>
			</div>
		);
	}
}

class Button extends Component {
	render(){
		const {button_text, classname} = this.props;
		return(
			<div>
				<input type="button" class={classname} 
					value={button_text}
					/>
			</div>
		)
	}
}

export default HeaderBar;