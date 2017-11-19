import React, {Component} from 'react';
import '../Pagecomponents.css'
import Text from '../Text'

class CustomerInfoContent extends Component {
	render(){
		return(
			<div>
				<Text 
					text="Home > Customer Info"
					classname="contentText"
					/>
			</div>
		)
	}
}

export default CustomerInfoContent