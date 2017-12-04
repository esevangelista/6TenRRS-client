import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon } from 'semantic-ui-react'
import EditBranch from './BranchEdit';
import DelBranch from './BranchDelete';


export default class BranchView extends Component {
  state = {
    branches:[]
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/branch')
    .then((response) => {
      this.setState({branches:response.data.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {branches} = this.state;
    return (
      <Table singleLine striped color='teal' fluid textAlign='center'>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Branch Location</Table.HeaderCell>
            <Table.HeaderCell>Branch Manager</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />


          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            branches.map((branch) => {
              return (
                <Table.Row key = {branch.BranchID}>
                  <Table.Cell>{branch.BranchID}</Table.Cell>
                  <Table.Cell> {branch.BranchLocation}</Table.Cell>
                  <Table.Cell>{branch.BranchManager}</Table.Cell>
                  <Table.Cell collapsing><EditBranch value={branch}/></Table.Cell>
                  <Table.Cell collapsing><DelBranch value={branch}/></Table.Cell>

                </Table.Row>
              );
            })
          }
        </Table.Body>  
      </Table>
    );
  }
}
