import React, { Component } from "react";
import axios from 'axios';
import { Card, Input, Image, Form, Modal,Table, Dropdown} from 'semantic-ui-react'
import EditPromo from './PromoEdit';
import DelPromo from './PromoDelete';


export default class SearchPromo extends Component {

  state =
  {
    products: {},
    search: '',
    showResults: false
  }
  handleChange = (e,{name,value}) => this.setState({search: value})
  handleSubmit = e => {
    axios.get(`http://localhost:3001/api/promo/${this.state.search}`)
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
          (<Modal  open={showResults} onClose={this.closeModal}  blurring='true' >
            <Modal.Header>Search results for '{search}'</Modal.Header>
                <Modal.Content  >
                    <Table singleLine striped color='teal' fluid compact>
                        <Table.Header >
                        <Table.Row >
                            <Table.HeaderCell>Promo ID</Table.HeaderCell>
                            <Table.HeaderCell>Product Name</Table.HeaderCell>
                            <Table.HeaderCell>Php</Table.HeaderCell>
                            <Table.HeaderCell>Stars Earnable</Table.HeaderCell>
                            <Table.HeaderCell>Stars Needed</Table.HeaderCell>
                            <Table.HeaderCell>Expiration Date</Table.HeaderCell>
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
                                <Table.Cell>{product.StarsEarnable}</Table.Cell>
                                <Table.Cell>{product.StarsNeeded}</Table.Cell>
                                <Table.Cell>{product.ExprDate}</Table.Cell>
                                <Table.Cell>
                                    <Dropdown icon='options' button className='icon'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item><EditPromo value={product}/></Dropdown.Item>
                                        <Dropdown.Item><DelPromo value={product}/></Dropdown.Item>
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
        <Form onSubmit={this.handleSubmit} fluid>
          <Form.Input icon='search' placeholder='Search a product' name={search} value={search} onChange={this.handleChange}  />
        </Form>
   
      </div>

    );
  }


}