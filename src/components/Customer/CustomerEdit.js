import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Icon, Popup} from 'semantic-ui-react'
import axios from 'axios';

class EditCustomer extends Component{
  state = 
  { 
    Name : this.props.value.Name,
    Address : this.props.value.Address,
    ContactNum: this.props.value.ContactNum,
    Birthday: this.props.value.Birthday
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const data = this.state;
    axios.put(`http://localhost:3001/api/customer/${this.props.value.CustomerID}`, data)
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
    this.setState({ Name: '', ContactNum: '',Address: '',Birthday:'' })

  }

  render(){
    const {Name, ContactNum,Address,Birthday} = this.state;
    return(
      <Modal dimmer trigger={<Icon name='edit' size='large' color='black'/>} onSubmit={this.handleSubmit}>
          <Modal.Header>Edit Customer Info</Modal.Header>
          <Modal.Content >

            <Form >
              <Form.Group unstackable widths={2}>
                <Form.Input label='Name' placeholder='Name' name='Name' value={Name} onChange={this.handleChange} required/>
                <Form.Input label='Birthday' type='date' name='Birthday' value={Birthday} onChange={this.handleChange} required />

              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label='Address' placeholder='Address'  name='Address' value={Address} onChange={this.handleChange} required/>
                <Form.Input label='Phone' placeholder='Phone' name='ContactNum' value={ContactNum} onChange={this.handleChange} required />
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default EditCustomer;


