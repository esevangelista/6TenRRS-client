import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message} from 'semantic-ui-react'
import axios from 'axios';

class AddBranch extends Component{
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const {branchLocation, branchManager} = this.state;
    const data = {BranchLocation: branchLocation, BranchManager: branchManager};
    this.setState({ BranchLocation: '', BranchManager: ''})
    axios.post('http://localhost:3001/api/branch/', data)
    .then(function (response) {
      console.log(response);

    })
    .catch(function (error) {
      switch(error.response.data.status){
        case 500:
          alert(error.response.data.message);
          break;
      }
    });

  }

	render(){
    const {BranchLocation, BranchManager} = this.state;
    return(
      <Modal dimmer trigger={<Button color='teal'>New Branch</Button>} onSubmit={this.handleSubmit}>
          <Modal.Header>Add Branch</Modal.Header>
          <Modal.Content >

            <Form >
              <Form.Group>
                <Form.Input label='Branch Location' placeholder='Branch Location' name='branchLocation' value={BranchLocation} onChange={this.handleChange} required/>
                <Form.Input label='Branch Manager' placeholder='Branch Manager' name='branchManager' value={BranchManager} onChange={this.handleChange} required/>
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default AddBranch;


