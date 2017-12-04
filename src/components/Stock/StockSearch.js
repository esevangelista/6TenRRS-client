import React, { Component } from "react";
import axios from 'axios';
import { Card, Input, Image, Form, Modal,Table} from 'semantic-ui-react'
import EditStock from './StockEdit';
import DelStock from './StockDelete';


export default class SearchBranch extends Component {

  state =
  {
    stocks: {},
    search: '',
    showResults: false
  }
  handleChange = (e,{name,value}) => this.setState({search: value})
  handleSubmit = e => {
    axios.get(`http://localhost:3001/api/stock/${this.state.search}`)
      .then((response) => {
        const results = response.data.data;
        this.setState({stocks:results,showResults:true});
        
      })
      .catch((error) => {
        console.log(error);
    });
  }
  closeModal = () => this.setState({showResults:false})
  render(){
    const {stocks, search, showResults} = this.state;
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
                        <Table.HeaderCell>Branch ID</Table.HeaderCell>
                        <Table.HeaderCell>Stock ID</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {
                        stocks.map((stock) => {
                          return (
                            <Table.Row key = {stock.StockID}>
                              <Table.Cell>{stock.Branch_ID}</Table.Cell>
                              <Table.Cell>{stock.Product_ID}</Table.Cell>
                              <Table.Cell>{stock.Quantity}</Table.Cell>
                              <Table.Cell collapsing><EditStock BranchID={stock.Branch_ID} ProductID={stock.Product_ID}/></Table.Cell>
                              <Table.Cell collapsing><DelStock BranchID={stock.Branch_ID} ProductID={stock.Product_ID}/></Table.Cell>
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
          <Form.Input icon='search' placeholder='Search Stock by Branch ID' name={search} value={search} onChange={this.handleChange}  />
        </Form>
   
      </div>

    );
  }


}