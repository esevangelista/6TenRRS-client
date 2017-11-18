import React, {Component} from 'react';
import './Pagecomponents.css'


class Content extends Component{
	render(){
		return(
			<div class="contentHolder">
				<Text 
					text="Home > Customer Info"
					classname="contentText"
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

export default Content;