import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message} from 'semantic-ui-react'
import axios from 'axios';

class AddStock extends Component{
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const {Product_Id, Branch_Id, Quantity} = this.state;
    const data = {Product_Id: Product_Id, Branch_Id: Branch_Id, Quantity: Quantity};
    this.setState({ Product_Id: '', Branch_Id: '', Quantity: 0});
    axios.post('http://localhost:3001/api/stock/', data)
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
    const {Product_Id, Branch_Id, Quantity} = this.state;
    return(
      <Modal dimmer trigger={<Button color='teal'>New Stock</Button>} onSubmit={this.handleSubmit}>
          <Modal.Header>Add Stock</Modal.Header>
          <Modal.Content >

            <Form >
              <Form.Group>
                <Form.Input label='Product ID' placeholder='Product Id' name='prodid' value={Product_Id} onChange={this.handleChange} required/>
                <Form.Input label='Branch ID' placeholder='Branch Id' name='branchid' value={Branch_Id} onChange={this.handleChange} required/>
                <Form.Input label='Quantity' placeholder='Quantity' name='quantity' value={Quantity} onChange={this.handleChange} required/>                
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default AddStock;


