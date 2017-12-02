import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon, Dropdown } from 'semantic-ui-react'
import EditProduct from './../components/ProductEdit';
import DelProduct from './../components/ProductDelete';
import PromoUtil from './../components/PromoModal';

export default class ProductView extends Component {
  state = {
    products:[]
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/product')
    .then((response) => {
      this.setState({products:response.data.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {products} = this.state;
    return (
      <Table singleLine striped color='teal' fluid compact>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Product Name</Table.HeaderCell>
            <Table.HeaderCell>Php</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            products.map((product) => {
              return (
                <Table.Row key = {product.ProdID}>
                  <Table.Cell>{product.ProdID}</Table.Cell>
                  <Table.Cell> {product.ProdName}</Table.Cell>
                  <Table.Cell>{product.Price}</Table.Cell>
                  <Table.Cell>
                    <Dropdown icon='options' button className='icon'>
                      <Dropdown.Menu>
                        <Dropdown.Item><EditProduct value={product}/></Dropdown.Item>
                        <Dropdown.Item><DelProduct value={product}/></Dropdown.Item>
                        <Dropdown.Item><PromoUtil /></Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}
