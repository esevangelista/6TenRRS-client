import React, { Component } from "react";
import { Button, Header, Image,Table, Modal,Form , Segment, Message,Dropdown, Label, Input, Checkbox} from 'semantic-ui-react'
import axios from 'axios';
import EditStock from './StockEdit';
import DelStock from './StockDelete';
var branchOptions = [], productOptions=[];

class SearchStock extends Component{
  state = { branches: [],valueB:'',results:[],showResults: false,notFound: false}
  handleSubmit = () => {
    axios.get(`http://localhost:3001/api/stock/${this.state.valueB}`)
    .then((response)=>{
      this.setState({results: response.data.data, showResults:true})
    })
    .catch((error)=>{
      this.setState({notFound:true})
      console.log(error);
    })
  }
  handleBChange = (e, { value }) =>  this.setState({valueB: value})
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
  
  }
	render(){
    const {branches,value,results,showResults,notFound} = this.state;
    return(
      <div>
        { showResults && 
          (<Modal size='large' open={showResults} onClose={this.closeModal}  blurring >
            <Modal.Header>Search Results for '{results[0].BranchLocation}'</Modal.Header>
                <Modal.Content  scrolling>
                  <Table singleLine striped color='teal'>
                    <Table.Header >
                      <Table.Row >
                        <Table.HeaderCell>Stock ID</Table.HeaderCell>
                        <Table.HeaderCell>Branch ID</Table.HeaderCell>
                        <Table.HeaderCell>Branch Location</Table.HeaderCell>
                        <Table.HeaderCell>Product ID</Table.HeaderCell>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Product Price</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell />
                        <Table.HeaderCell />


                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {
                        results.map((stock) => {
                          return (
                            <Table.Row key = {stock.StockID}>
                              <Table.Cell>{stock.StockID}</Table.Cell>    
                              <Table.Cell> {stock.BranchID}</Table.Cell>            
                              <Table.Cell> {stock.BranchLocation}</Table.Cell>
                              <Table.Cell>{stock.ProdID}</Table.Cell>
                              <Table.Cell>{stock.ProdName}</Table.Cell>
                              <Table.Cell>{stock.Price}</Table.Cell>
                              <Table.Cell>{stock.Quantity}</Table.Cell>
                              <Table.Cell collapsing><EditStock value={stock}/></Table.Cell>
                              <Table.Cell collapsing><DelStock value={stock}/></Table.Cell>
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
                      content='The stocks of the branch you are looking for cannot be found'
                  />
              </Modal>
          )
        }
        <Modal dimmer trigger={<Button color='teal'>Search by Branch Location</Button>} >
            <Modal.Header>Search by Branch Location</Modal.Header>
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
                <Button type='submit' fluid color='teal'>SEARCH</Button>
              </Form>
            </Modal.Content>
          </Modal>
      </div>
    
    )
  }
  
}

export default SearchStock;


