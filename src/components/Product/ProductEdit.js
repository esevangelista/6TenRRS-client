import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Icon, Popup} from 'semantic-ui-react'
import axios from 'axios';

class EditCustomer extends Component{
  state = 
  { 
    ProdName : this.props.value.ProdName,
    Price : this.props.value.Price,

  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const data = this.state;
    axios.put(`http://localhost:3001/api/product/${this.props.value.ProdID}`, data)
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
    this.setState({ ProdName: '', Price: ''})

  }

  render(){
    const { ProdName, Price} = this.state;
    return(
        <Modal dimmer size='tiny'trigger={<Button color='teal' fluid>Edit</Button>} >
            <Modal.Header>Edit Product Info</Modal.Header>
            <Modal.Content >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input label='Product Name'  name='ProdName' value={ProdName} onChange={this.handleChange} required/>
                    <Form.Input label='Price' placeholder='Php' type='number' name='Price' value={Price} onChange={this.handleChange} required/>
                    <Button type='submit' color='teal'fluid >Update</Button>
                </Form>
            </Modal.Content>
      </Modal>

    )
  }
  
}

export default EditCustomer;


