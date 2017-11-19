import React, {Component} from 'react';
import '../Pagecomponents.css'
import Text from '../Text'

class Home extends Component {
	render(){
		return(
			<div>
				<Text 
					text="This is the homepage?"
					classname="contentText"
					/>
			</div>
		)
	}
}

export default Home;