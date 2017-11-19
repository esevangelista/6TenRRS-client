import React, {Component} from 'react';
import './Pagecomponents.css'

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

export default Text;