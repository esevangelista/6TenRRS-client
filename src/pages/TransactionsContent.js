import React, {Component} from 'react';
// import '../Pagecomponents.css'
import Text from '../Text'
import HeaderBar from '../HeaderBar'
import SideBar from '../components/Sidebar'

class TransactionsContent extends Component {
	render(){
		return(
			<div class="contentHolder">
				<SideBar />
				<HeaderBar
					term="Transaction"/>
				<div style={{'margin-top':'7%'}}>
					<Text 
						text="Home > Transactions"
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
			    <tr><th>Payment Amount</th>
			    <th>Payment Type</th>
			    <th>Description</th>
			    <th>Date Created</th>
			    <th>Date Updated</th>
			    <th>Customer ID</th>
			    <th>Branch ID</th>
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




export default TransactionsContent;