import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message} from 'semantic-ui-react'
import axios from 'axios';

class AddPromo extends Component{
  state = {
    product: this.props.value
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const {StarsEarnable,StarsNeeded,ExprDate,product} = this.state;    
    const data = {ProductID: product.ProdID,StarsEarnable: StarsEarnable,StarsNeeded:StarsNeeded,ExprDate:ExprDate};
    console.log(data)
    this.setState({StarsEarnable:'',StarsNeeded:'',ExprDate:'',ProductID:'' })
    axios.post('http://localhost:3001/api/promo/', data)
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
    const {StarsEarnable,StarsNeeded,ExprDate,product} = this.state;
    return(
      <Modal dimmer size='tiny'trigger={<Button color='orange'>Promo</Button>} >
          <Modal.Header>Add Promo</Modal.Header>
          <Modal.Content >
						<Form onSubmit={this.handleSubmit}>
							<Form.Input label='Product Name'  name='ProdName' value={product.ProdName} onChange={this.handleChange} required readOnly/>
							<Form.Input label='Earnable Stars' placeholder='promo stars' type='number' name='StarsEarnable' value={StarsEarnable} onChange={this.handleChange} required/>
                <Form.Input label='Needed Stars' placeholder='promo stars' type='number' name='StarsNeeded' value={StarsNeeded} onChange={this.handleChange} required/>
                <Form.Input label='Promo Expiration Date' type='date' name='ExprDate' value={ExprDate} onChange={this.handleChange} required />
                <Button type='submit' color='teal'fluid >Submit</Button>
						</Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default AddPromo;


