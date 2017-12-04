import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon } from 'semantic-ui-react'
import EditCustomer from './CustomerEdit';
import DelCustomer from './CustomerDelete';



export default class CustomerView extends Component {
  state = {
    customers:[]
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/customer')
    .then((response) => {
      this.setState({customers:response.data.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {customers} = this.state;
    return (
      <Table singleLine striped color='teal'>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Contact Number</Table.HeaderCell>
            <Table.HeaderCell>Birthday</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />


          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            customers.map((customer) => {
              return (
                <Table.Row key = {customer.CustomerID}>
                  <Table.Cell>{customer.CustomerID}</Table.Cell>
                  <Table.Cell> {customer.Name}</Table.Cell>
                  <Table.Cell>{customer.Address}</Table.Cell>
                  <Table.Cell>{customer.ContactNum}</Table.Cell>
                  <Table.Cell>{customer.Birthday}</Table.Cell>
                  <Table.Cell>{customer.Age}</Table.Cell>
                  <Table.Cell collapsing><EditCustomer value={customer}/></Table.Cell>
                  <Table.Cell collapsing><DelCustomer value={customer}/></Table.Cell>

                </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}
