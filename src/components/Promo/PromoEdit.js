import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Icon, Popup} from 'semantic-ui-react'
import axios from 'axios';

class EditPromo extends Component{
  state = 
  { 
    ProdName : this.props.value.ProdName,
    PromoID : this.props.value.PromoID,
    StarsEarnable : this.props.value.StarsEarnable,
    StarsNeeded: this.props.value.StarsNeeded,
    ExprDate: this.props.value.ExprDate,
    ProductID: this.props.value.ProdID
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const { ProdName,PromoID,StarsEarnable,StarsNeeded,ExprDate,ProductID} = this.state;
    const data = {ProductID: ProductID,  StarsEarnable: StarsEarnable, StarsNeeded: StarsNeeded, ExprDate: ExprDate};
    axios.put(`http://localhost:3001/api/promo/${this.props.value.PromoID}`, data)
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
    this.setState({ ProductID: '',  StarsEarnable: '', StarsNeeded: '', ExprDate: ''})

  }

  render(){
    const { ProdName,PromoID,StarsEarnable,StarsNeeded,ExprDate,ProductID} = this.state;
    return(
        <Modal dimmer size='tiny'trigger={<Icon color='teal' size='large' name='edit'></Icon>}>
            <Modal.Header>Edit Promo Info</Modal.Header>
            <Modal.Content >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input label='Product Name'  name='ProdName' value={ProdName} onChange={this.handleChange} readOnly/>
                    <Form.Input label='Earnable Stars' placeholder='promo stars' type='number' name='StarsEarnable' value={StarsEarnable} onChange={this.handleChange} required/>
                    <Form.Input label='Stars Needed ' placeholder='promo stars' type='number' name='StarsNeeded' value={StarsNeeded} onChange={this.handleChange} required/>
                    <Form.Input label='Promo Expiration Date' placeholder='YYYY-MM-DD' type='date' name='ExprDate' value={ExprDate} onChange={this.handleChange} required/>
                    <Button type='submit' color='teal'fluid >Update Promo</Button>
                </Form>
            </Modal.Content>
      </Modal>

    )
  }
  
}

export default EditPromo;


