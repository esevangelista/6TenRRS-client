
import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Icon, Popup} from 'semantic-ui-react'
import axios from 'axios';

class EditBranch extends Component{
  state = 
  { 
    BranchLocation : this.props.value.BranchLocation,
    BranchManager : this.props.value.BranchManager,
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const data = this.state;
    axios.put(`http://localhost:3001/api/branch/${this.props.value.BranchID}`, data)
    .then(function (response) {
      console.log(response);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error)
      switch(error.response.data.status){
        case 500:
          alert(error.response.data.message);
          break;
      }
    });
    this.setState({ BranchLocation: '', BranchManager: ''});

  }

  render(){
    const {BranchLocation, BranchManager} = this.state;
    return(
      <Modal dimmer trigger={<Icon name='edit' size='large' color='black'/>} onSubmit={this.handleSubmit}>
          <Modal.Header>Edit Customer Info</Modal.Header>
          <Modal.Content >

            <Form >
              <Form.Group unstackable widths={2}>
                <Form.Input label='BranchLocation' placeholder='Branch Location' name='BranchLocation' value={BranchLocation} onChange={this.handleChange} required/>
                <Form.Input label='BranchManager' placeholder='Branch Manager' name='BranchManager' value={BranchManager} onChange={this.handleChange} required />
              </Form.Group>

              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default EditBranch;


