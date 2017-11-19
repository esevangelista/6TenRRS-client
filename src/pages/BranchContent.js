import React, {Component} from 'react';
import '../Pagecomponents.css'
import Text from '../Text'

class BranchContent extends Component {
	render(){
		return(
			<div>
				<Text 
					text="Home > Branch"
					classname="contentText"
					/>
			</div>
		)
	}
}

export default BranchContent;