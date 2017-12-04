import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon, Dropdown, Form} from 'semantic-ui-react'
import EditPromo from './PromoEdit';
import DelPromo from './PromoDelete';


export default class PromoView extends Component {
  state = {
    promos:[]
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/promo')
    .then((response) => {
      this.setState({promos:response.data.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  render() {
    const {promos} = this.state;
    return (
        
        <Table singleLine collapsing  color='orange' fluid >
            <Table.Header >
            <Table.Row >
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Product Name</Table.HeaderCell>
                <Table.HeaderCell>Earnable Stars</Table.HeaderCell>
                <Table.HeaderCell>Stars Needed</Table.HeaderCell>
                <Table.HeaderCell>Expiration Date</Table.HeaderCell>
                <Table.HeaderCell />
            </Table.Row>
            </Table.Header>
            <Table.Body>
            {
                promos.map((promo) => {
                return (
                    <Table.Row key = {promo.PromoID}>
                      <Table.Cell>{promo.PromoID}</Table.Cell>
                      <Table.Cell>{promo.ProdName}</Table.Cell>
                      <Table.Cell> {promo.StarsEarnable}</Table.Cell>
                      <Table.Cell>{promo.StarsNeeded}</Table.Cell>
                      <Table.Cell>{promo.ExprDate}</Table.Cell>
                      <Table.Cell><EditPromo value={promo}/><DelPromo value={promo}/></Table.Cell>
                    </Table.Row>
                );
                })
            }
            </Table.Body>  
        </Table>
    );
  }
}
