import React, {Component} from 'react';
// import '../Pagecomponents.css'
import Text from '../Text'
import HeaderBar from '../HeaderBar'
import SideBar from '../components/Sidebar'

class CustomerInfoContent extends Component {

	constructor(props){
		super(props)

		const customerinfolist = [{
			CustomerID: 1,
			Name: "Aaron",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 2,
			Name: "Aaron2",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 3,
			Name: "Aaron3",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		},{
			CustomerID: 4,
			Name: "Aaron4",
			Address: "Violeta",
			ContactNum: "0927",
			Birthday: "123123",
			Age: 18
		}]

		this.state = {
			customers: customerinfolist
		}

	}


	render(){

		return(
			<div class="contentHolder">
				<SideBar />
				<HeaderBar 
					term="Customer"/>
				<div style={{'margin-top':'7%'}}>
					<Text 
						text="Home > Customer Info"
						classname="contentText"
						/>
					<Table 
						content={this.state.customers}/>
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
			    <tr><th>Name</th>
			    <th>Address</th>
			    <th>ContactNum</th>
			    <th>Birthday</th>
			    <th>Age</th>
			  </tr></thead>
			  <tbody>
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
			  </tbody>
			</table>
		)
	}
}

export default CustomerInfoContent