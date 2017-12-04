import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon } from 'semantic-ui-react'
import EditStock from './../components/StockEdit';
import DelStock from './../components/StockDelete';



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
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Branch ID</Table.HeaderCell>
            <Table.HeaderCell>Product ID</Table.HeaderCell>
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
                  <Table.Cell>{stock.StockId}</Table.Cell>                
                  <Table.Cell> {stock.Branch_Id}</Table.Cell>
                  <Table.Cell>{stock.Product_Id}</Table.Cell>
                  <Table.Cell>{stock.Quantity}</Table.Cell>
                  <Table.Cell collapsing><EditStock BranchID={stock.Branch_Id} ProductID={stock.Product_Id}/></Table.Cell>
                  <Table.Cell collapsing><DelStock BranchID={stock.Branch_Id} ProductID={stock.Product_Id}/></Table.Cell>

                </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}
