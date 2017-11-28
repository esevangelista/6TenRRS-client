import React, {Component} from 'react';
// import '../Pagecomponents.css'
import Text from '../Text'
import SideBar from '../components/Sidebar'
import HeaderBar from '../HeaderBar'

class PromoContent extends Component {
	render(){
		return(
			<div class="contentHolder">
				<SideBar/>
				<HeaderBar
					term="Promo"/>
				<div style={{'margin-top':'7%'}}>
					<Text 
						text="Home > Promo"
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
			    <tr><th>Stars Earnable</th>
			    <th>Stars Needed</th>
			    <th>Expiry Date</th>
			    <th>Product ID</th>
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

export default PromoContent;