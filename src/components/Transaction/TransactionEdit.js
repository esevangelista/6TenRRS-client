import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Icon, Popup} from 'semantic-ui-react'
import axios from 'axios';

class EditTransaction extends Component{
  state = 
  { 
    TransID: this.props.value.TransID,
    BranchId: this.props.value.BranchId,
    CustomerId: this.props.value.CustomerId,
    TransDesc: this.props.value.TransDesc,
    Payment_amt: this.props.value.Payment_amt,
    Payment_type: this.props.value.Payment_type,
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const {TransDesc,Payment_amt,Payment_type} = this.state;
    const data = {TransDesc: TransDesc, Payment_amt:Payment_amt, Payment_type:Payment_type}
    axios.put(`http://localhost:3001/api/transaction/${this.props.value.TransID}`, data)
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
    this.setState({})

  }

  render(){
    const { TransID,TransDesc,BranchId,CustomerId,Payment_amt,Payment_type} = this.state;
    return(
        <Modal dimmer size='tiny'trigger={<Button color='teal' fluid>Edit</Button>} >
            <Modal.Header>Edit Transaction Info</Modal.Header>
            <Modal.Content >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input label='Transaction ID'  name='TransID' value={TransID} readOnly/>
                    <Form.Input label='Branch ID'  name='BranchId' value={BranchId} readOnly/>
                    <Form.Input label='Customer ID'  name='CustomerId' value={CustomerId} readOnly/>
                    <Form.Input label='Transaction Description' placeholder='description' type='text' name='TransDesc' value={TransDesc} onChange={this.handleChange} required/>
                    <Form.Input label='Payment Amount' placeholder='Php' type='number' name='Payment_amt' value={Payment_amt} onChange={this.handleChange} required/>
                    <Form.Input label='Payment Type' placeholder='PESO or POINTS' type='text' name='Payment_type' value={Payment_type} onChange={this.handleChange} required/>
                    <Button type='submit' color='teal'fluid >Update</Button>
                </Form>
            </Modal.Content>
      </Modal>

    )
  }
  
}

export default EditTransaction;


