import React, {Component} from 'react';
import './Pagecomponents.css'

class HeaderBar extends Component {

	render(){

		const { term }= this.props;

		return(
			<div class="header" style={{'position':'fixed','width':'100%'}}>
				<Textbox />
				<Button 
					button_text={"Search "+term}
					classname="searchButton"
					/>
			</div>
		)
	}
}


class Textbox extends Component {
	render(){
		return(
			<div>
				<div class="ui category search" style={{'margin-left':'10px'}}>
				  <div class="ui icon input">
				    <input class="prompt" type="text" placeholder="Type Something . . ."/>
				    <i class="search icon"></i>
				  </div>
				</div>
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
					value={button_text}/>
			</div>
		)
	}
}

export default HeaderBar;