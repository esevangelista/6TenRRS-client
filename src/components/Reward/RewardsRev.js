import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon } from 'semantic-ui-react'



export default class BranchView extends Component {
  state = {
    results:[]
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/rewardReview')
    .then((response) => {
      this.setState({results:response.data.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {results} = this.state;
    return (
      <Table singleLine striped color='teal' fluid textAlign='center' >
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>Customer Name</Table.HeaderCell>
            <Table.HeaderCell>Valid Reward Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            results.map((data) => {
              return (
                <Table.Row key = {data.Name}>
                  <Table.Cell> {data.Name}</Table.Cell>
                  <Table.Cell>{data.Points}</Table.Cell>
                </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}
