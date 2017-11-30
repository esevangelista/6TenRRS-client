import React, { Component } from "react";
import axios from 'axios';
import { Card, Input, Image, Form, Modal,Table} from 'semantic-ui-react'
import EditCustomer from './CustomerEdit';
import DelCustomer from './CustomerDelete';


export default class SearchCustomer extends Component {


  state =
  {
    customers: {},
    search: '',
    showResults: false
  }
  handleChange = (e,{name,value}) => this.setState({search: value})
  handleSubmit = e => {
    axios.get(`http://localhost:3001/api/customer/${this.state.search}`)
      .then((response) => {
        const results = response.data.data;
        this.setState({customers:results,showResults:true});
        
      })
      .catch((error) => {
        console.log(error);
    });
  }
  closeModal = () => this.setState({showResults:false})
  render(){
    const {customers, search, showResults} = this.state;
    return(
      <div> 
        { showResults && 
          (<Modal  open={showResults} onClose={this.closeModal}  blurring >
            <Modal.Header>Search results</Modal.Header>
                <Modal.Content  scrolling>
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
                </Modal.Content>
            </Modal> 
          )
        }
        <Form onSubmit={this.handleSubmit}>
          <Form.Input icon='search' placeholder='Search Customer' name={search} value={search} onChange={this.handleChange}  />
        </Form>
   
      </div>

    );
  }


}