import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message} from 'semantic-ui-react'
import axios from 'axios';

class AddBranch extends Component{
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const data = this.state;    
    this.setState({ BranchLocation: '', BranchManager: ''})
    axios.post('http://localhost:3001/api/branch/', data)
    .then(function (response) {
      console.log(response);
      window.location.reload();
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
      <Modal dimmer size='mini' trigger={<Button color='teal'>New Branch</Button>} onSubmit={this.handleSubmit}>
          <Modal.Header>Add Branch</Modal.Header>
          <Modal.Content >

            <Form >
                <Form.Input label='Branch Location' inline  placeholder='Branch Location' name='BranchLocation' value={BranchLocation} onChange={this.handleChange} required fluid/>
                <Form.Input label='Branch Manager' inline  placeholder='Branch Manager' name='BranchManager' value={BranchManager} onChange={this.handleChange} required fluid/>
                <Button type='submit' color='teal' fluid>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default AddBranch;


