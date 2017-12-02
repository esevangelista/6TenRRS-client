import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message} from 'semantic-ui-react'
import axios from 'axios';

class AddProduct extends Component{
  state = {}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const data = this.state;
    console.log(data)
    this.setState({ProdName:'',Price:'' })
    axios.post('http://localhost:3001/api/product/', data)
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
    const {ProdName,Price} = this.state;
    return(
      <Modal dimmer size='tiny'trigger={<Button color='teal'>New Product</Button>} >
          <Modal.Header>Add Product</Modal.Header>
          <Modal.Content >
						<Form onSubmit={this.handleSubmit}>
							<Form.Input label='Product Name'  name='ProdName' value={ProdName} onChange={this.handleChange} required/>
							<Form.Input label='Price' placeholder='Php' type='number' name='Price' value={Price} onChange={this.handleChange} required/>
							<Button type='submit' color='teal'fluid >Submit</Button>
						</Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default AddProduct;


