import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Table,Message,Dropdown, Label, Input, Checkbox} from 'semantic-ui-react'
import axios from 'axios';
import EditTransaction from './TransactionEdit';
var branchOptions = [], customerOptions = [];

class SearchTrans extends Component{
  state = { branches: [], customers: [],valueB:'',valueC:'',results:[], showResults:false,notFound:false}
  handleSubmit = () => {
    axios.get(`http://localhost:3001/api/transaction/${this.state.valueB}/${this.state.valueC}`)
    .then((response)=>{
        console.log(response);
        this.setState({results: response.data.data,showResults:true})
    })
    .catch((error)=>{
        console.log(error.response.data.data);
        this.setState({notFound: true})
    })
  }

  handleBChange = (e, { value }) =>  this.setState({valueB: value})
  handleCChange = (e, { value }) => this.setState({valueC: value})  
  closeModal = () => this.setState({showResults:false})
  closeMessage = () => this.setState({notFound:false})
  componentDidMount(){
    
    axios.get('http://localhost:3001/api/branch')
    .then((response) => {      
      this.setState({branches:response.data.data})      
      for(var i=0;i<this.state.branches.length; i++){
        var choice = {
          key : this.state.branches[i].BranchID, 
          value: this.state.branches[i].BranchID, 
          text: this.state.branches[i].BranchLocation
        }
        branchOptions.push(choice);
      }
    })
    .catch((error) => {
      console.log(error);
    });
    axios.get('http://localhost:3001/api/customer')
    .then((response) => {
      this.setState({customers:response.data.data})
      for(var i=0;i<this.state.customers.length; i++){
        var choice = {
          key : this.state.customers[i].CustomerID, 
          value: this.state.customers[i].CustomerID, 
          text: this.state.customers[i].Name
        }
        customerOptions.push(choice);
      }
    })
    .catch((error) => {
      console.log(error);
    });
    
  }
	render(){
    const {branches,customers,value,results,showResults,notFound} = this.state;
    return(
        <div>
           { showResults && 
            (<Modal size='large' open={showResults} onClose={this.closeModal}  blurring >
              <Modal.Header>Search Results</Modal.Header>
                  <Modal.Content  scrolling>
                    <Table singleLine striped color='teal' fluid collapsing >
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
                            results.map((transaction) => {
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
                  </Modal.Content>
              </Modal> 
            )
          }
          {notFound && 
            (
                <Modal open={notFound} onClose={this.closeMessage} basic blurring='true'>
                    <Message
                        warning
                        header='Not Found'
                        content='The customer transaction you are looking for cannot be found'
                    />
                </Modal>
            )
          }
          <Modal dimmer trigger={<Button color='orange' inverted>Search Customer Transaction</Button>} >
            <Modal.Header>Search for Customer's Transactions in a Branch</Modal.Header>
            <Modal.Content >
                <Form onSubmit={this.handleSubmit}>
                <Form.Field required>
                    <Header> Select a Branch </Header>
                    <Dropdown
                    fluid
                    scrolling
                    onChange={this.handleBChange}
                    options={branchOptions}
                    placeholder='Branch'
                    selection
                    search
                    value={value}
                    />
                </Form.Field>
                <Form.Field required>
                    <Header> Select a Customer </Header>
                    <Dropdown
                    fluid
                    scrolling
                    onChange={this.handleCChange}
                    options={customerOptions}
                    placeholder='Customer'
                    selection
                    search                    
                    value={value}
                    />
                </Form.Field>
                
                <Button type='submit' fluid color='teal'>SEARCH</Button>
                </Form>
            </Modal.Content>
            </Modal>
    
        </div>
    )
  }
  
}

export default SearchTrans;


