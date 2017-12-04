import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Icon, Popup} from 'semantic-ui-react'
import axios from 'axios';

class EditStock extends Component{
  state = 
  { 
    BranchID: this.props.BranchID,
    ProductID: this.props.ProductID,
    Quantity: this.props.Quantity
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const data = this.state;
    axios.put(`http://localhost:3001/api/stock/${this.props.BranchID}/${this.props.ProductID}`, data)
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
    this.setState({ BranchID: '', ProductID: '', Quantity: 0});

  }

  render(){
    const {BranchID, ProductID, Quantity} = this.state;
    return(
      <Modal dimmer trigger={<Icon name='edit' size='large' color='black'/>} onSubmit={this.handleSubmit}>
          <Modal.Header>Edit Stock Info</Modal.Header>
          <Modal.Content >

            <Form >
              <Form.Group unstackable widths={2}>
                <Form.Input label='Branch ID' placeholder='Branch ID' name='BranchID' value={BranchID} onChange={this.handleChange} required/>
                <Form.Input label='Product ID' placeholder='Product ID' name='ProductID' value={ProductID} onChange={this.handleChange} required />
                <Form.Input label='Quantity' placeholder='Quantity' name='Quantity' value={Quantity} onChange={this.handleChange} required />
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default EditStock;


