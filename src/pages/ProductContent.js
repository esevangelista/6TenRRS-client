import React, {Component} from 'react';
// import '../Pagecomponents.css'
import Text from '../Text'
import SideBar from '../components/Sidebar'
import HeaderBar from '../HeaderBar'


class ProductContent extends Component {
	render(){
		return(
			<div class="contentHolder">
				<SideBar />
				<HeaderBar
					term="Product"/>
				<div style={{'margin-top':'7%'}}>
					<Text 
						text="Home > Product"
						classname="contentText"
						/>
					<Table />
				</div>
			</div>
		)
	}
}

class Table extends Component {
	render(){
		const content = this.props.content;
		return(
			<table class="ui celled table" id="table">
			  <thead>
			    <tr><th>Product Name</th>
			    <th>Product Points</th>
			    <th>Price</th>
			  </tr></thead>
			  {/*<tbody>
			    {content.map((element)=>{
			      		return(
			      			<tr>
			      			<td>{element.Name}</td>
			      			<td>{element.Address}</td>
			      			<td>{element.ContactNum}</td>
			      			<td>{element.Birthday}</td>
			      			<td>{element.Age}</td>
			      			</tr>
			      		)
			    	  })
			  	}
			  </tbody>*/}
			</table>
		)
	}
}

export default ProductContent;