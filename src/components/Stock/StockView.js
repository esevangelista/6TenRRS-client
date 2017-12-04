import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon } from 'semantic-ui-react'
import EditStock from './StockEdit';
import DelStock from './StockDelete';



export default class StockView extends Component {
  state = {
    stocks:[]
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/stock')
    .then((response) => {
      this.setState({stocks:response.data.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {stocks} = this.state;
    return (
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
            stocks.map((stock) => {
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
    );
  }
}
