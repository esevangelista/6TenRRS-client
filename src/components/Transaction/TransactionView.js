import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon, Dropdown } from 'semantic-ui-react'
import EditTransaction from './TransactionEdit';
export default class ProductView extends Component {
  state = {
    transactions:[]
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/transaction')
    .then((response) => {
      this.setState({transactions:response.data.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {transactions} = this.state;
    return (
      <Table singleLine striped color='teal' fluid compact >
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Customer ID</Table.HeaderCell>
            <Table.HeaderCell>Branch ID</Table.HeaderCell>
            <Table.HeaderCell>Transaction Description</Table.HeaderCell>
            <Table.HeaderCell>Payment</Table.HeaderCell>
            <Table.HeaderCell>Payment Type</Table.HeaderCell>
            <Table.HeaderCell>Date Created</Table.HeaderCell>
            <Table.HeaderCell>Date Updated</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            transactions.map((transaction) => {
              return (
                <Table.Row key = {transaction.TransID}>
                  <Table.Cell>{transaction.TransID}</Table.Cell>
                  <Table.Cell>{transaction.CustomerId}</Table.Cell>
                  <Table.Cell>{transaction.BranchId}</Table.Cell>
                  <Table.Cell> {transaction.TransDesc}</Table.Cell>
                  <Table.Cell>{transaction.Payment_amt}</Table.Cell>
                  <Table.Cell>{transaction.Payment_type}</Table.Cell>
                  <Table.Cell>{transaction.DateCreated}</Table.Cell>
                  <Table.Cell>{transaction.DateUpdated}</Table.Cell>
                  <Table.Cell><EditTransaction value={transaction}/></Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}
