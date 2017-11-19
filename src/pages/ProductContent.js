import React, {Component} from 'react';
import '../Pagecomponents.css'
import Text from '../Text'


class ProductContent extends Component {
	render(){
		return(
			<div>
				<Text 
					text="Home > Product"
					classname="contentText"
					/>
			</div>
		)
	}
}

export default ProductContent;