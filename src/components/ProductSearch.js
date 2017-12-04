import React, { Component } from "react";
import axios from 'axios';
import { Card, Input, Image, Form, Modal,Table, Dropdown} from 'semantic-ui-react'
import EditProduct from './../components/ProductEdit';
import DelProduct from './../components/ProductDelete';


export default class SearchProduct extends Component {


  state =
  {
    products: {},
    search: '',
    showResults: false
  }
  handleChange = (e,{name,value}) => this.setState({search: value})
  handleSubmit = e => {
    axios.get(`http://localhost:3001/api/productName/${this.state.search}`)
      .then((response) => {
        const results = response.data.data;
        this.setState({products:results,showResults:true});
        
      })
      .catch((error) => {
        console.log(error);
    });
  }
  closeModal = () => this.setState({showResults:false})
  render(){
    const {products, search, showResults} = this.state;
    return(
      <div> 
        { showResults && 
          (<Modal  open={showResults} onClose={this.closeModal}  blurring >
            <Modal.Header>Search results for '{search}'</Modal.Header>
                <Modal.Content  scrolling>
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
                                        <Dropdown.Item>Promo</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Table.Cell>
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
          <Form.Input icon='search' placeholder='Search a product' name={search} value={search} onChange={this.handleChange}  />
        </Form>
   
      </div>

    );
  }


}