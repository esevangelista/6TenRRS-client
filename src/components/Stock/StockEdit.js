import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Icon, Popup} from 'semantic-ui-react'
import axios from 'axios';

class EditStock extends Component{
  state = 
  { 

    Quantity: this.props.value.Quantity,
    Product_Id: this.props.value.Product_Id
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const data = this.state;
    axios.put(`http://localhost:3001/api/stock/${this.props.BranchID}/${this.props.value.StockID}`, data)
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
    this.setState({});

  }

  render(){
    const {Quantity} = this.state;
    return(
      <Modal dimmer trigger={<Icon name='edit' size='large' color='black'/>} onSubmit={this.handleSubmit}>
          <Modal.Header>Edit Stock Info</Modal.Header>
          <Modal.Content >

            <Form >
                <Form.Input label='Branch Location' placeholder='Branch Location' name='BranchLocation' value={this.props.value.BranchLocation} readOnly required/>
                <Form.Input label='Product Name' placeholder='Product Name' name='ProdName' value={this.props.value.ProdName} readOnly required />
                <Form.Input label='Quantity' placeholder='Quantity' name='Quantity' value={Quantity} onChange={this.handleChange} required />
              <Button type='submit' fluid color='teal'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default EditStock;


