import React, {Component} from 'react';
// import '../Pagecomponents.css'
import Text from '../Text'
import HeaderBar from '../HeaderBar'

class ViewPointsContent extends Component {
	render(){
		return(
			<div>
				<HeaderBar 
					term="View Points"
				/>
				<Text 
					text="Home > ViewPointsContent"
					classname="contentText"
					/>
			</div>
		)
	}
}

export default ViewPointsContent;