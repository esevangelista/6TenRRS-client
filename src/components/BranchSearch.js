import React, { Component } from "react";
import axios from 'axios';
import { Card, Input, Image, Form, Modal,Table} from 'semantic-ui-react'
import EditBranch from './BranchEdit';
import DelBranch from './BranchDelete';


export default class SearchBranch extends Component {

  state =
  {
    branches: {},
    search: '',
    showResults: false
  }
  handleChange = (e,{name,value}) => this.setState({search: value})
  handleSubmit = e => {
    axios.get(`http://localhost:3001/api/branch/${this.state.search}`)
      .then((response) => {
        const results = response.data.data;
        this.setState({branches:results,showResults:true});
        
      })
      .catch((error) => {
        console.log(error);
    });
  }
  closeModal = () => this.setState({showResults:false})
  render(){
    const {branches, search, showResults} = this.state;
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
                              <Table.Cell>{branch.BranchLocation}</Table.Cell>
                              <Table.Cell>{branch.BranchManager}</Table.Cell>
                              <Table.Cell collapsing><EditBranch value={branch}/></Table.Cell>
                              <Table.Cell collapsing><DelBranch value={branch}/></Table.Cell>

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
          <Form.Input icon='search' placeholder='Search Customer' name={search} value={search} onChange={this.handleChange}  />
        </Form>
   
      </div>

    );
  }


}