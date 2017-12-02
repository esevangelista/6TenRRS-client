import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Icon, Popup} from 'semantic-ui-react'
import axios from 'axios';

class PromoUtil extends Component{
  state = 
  { 

  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    

  }

  render(){
    const { ProdName, Price} = this.state;
    return(
        <Modal dimmer trigger={<Button color='orange' fluid>Promo</Button>} >
            <Modal.Header>Promo Info</Modal.Header>
            <Modal.Content >

            </Modal.Content>
      </Modal>

    )
  }
  
}

export default PromoUtil;


