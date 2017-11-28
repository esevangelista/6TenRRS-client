import React, {Component} from 'react';
// import '../Pagecomponents.css'
import SideBar from '../components/Sidebar'
import Text from '../Text'
import HeaderBar from '../HeaderBar'


class StockContent extends Component {
	render(){
		return(
			<div class="contentHolder">
				<SideBar />
				<HeaderBar
					term="Stock"/>
				<div style={{'margin-top':'7%'}}>
					<Text 
						text="Home > Stocks"
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
			    <tr><th>Product ID</th>
			    <th>Product ID</th>
			    <th>Quantity</th>
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

export default StockContent;