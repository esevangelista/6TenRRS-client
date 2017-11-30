import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message} from 'semantic-ui-react'
import axios from 'axios';

class AddCustomer extends Component{
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const {fname,lname,address,contact,bday} = this.state;
    const data = {Name: fname+' '+lname,Address: address, ContactNum: contact, Birthday: bday};
    this.setState({ fname: '', lname: '' , address: '',contact:'',bday: ''})
    axios.post('http://localhost:3001/api/customer', data)
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
    const {fname,lname,address,contact,bday} = this.state;
    return(
      <Modal dimmer trigger={<Button color='teal'>New Customer</Button>} onSubmit={this.handleSubmit}>
          <Modal.Header>Add Customer</Modal.Header>
          <Modal.Content >

            <Form >
              <Form.Group unstackable widths={2}>
                <Form.Input label='First name' placeholder='First name' name='fname' value={fname} onChange={this.handleChange} required/>
                <Form.Input label='Last name' placeholder='Last name' name='lname' value={lname} onChange={this.handleChange} required/>
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input label='Address' placeholder='Address'  name='address' value={address} onChange={this.handleChange} required/>
                <Form.Input label='Phone' placeholder='Phone' name='contact' value={contact} onChange={this.handleChange} required />
                <Form.Input label='Birthday' type='date' name='bday' value={bday} onChange={this.handleChange} required />
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default AddCustomer;


