
import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Icon, Popup} from 'semantic-ui-react'
import axios from 'axios';

class EditRewards extends Component{
  state = 
  { 
    Points: this.props.value.Points,
    DateUsed: this.props.value.DateUsed,
    DateEarned: this.props.value.DateEarned
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const data = this.state;
    axios.put(`http://localhost:3001/api/reward/${this.props.value.CustomerId}/${this.props.value.RewardID}`, data)
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
    const {Points,DateEarned,DateUsed} = this.state;
    return(
      <Modal dimmer trigger={<Button color='teal' icon='edit'/>} onSubmit={this.handleSubmit}>
          <Modal.Header>Edit Reward Info</Modal.Header>
          <Modal.Content >

            <Form >
              <Form.Group unstackable widths={2}>
                <Form.Input label='Customer Name' placeholder='Customer Name' name='CustomerName' value={this.props.value.Name}  readOnly/>
                <Form.Input label='Reward Points' placeholder='Reward Points' name='Points' value={Points} onChange={this.handleChange} required/>
                <Form.Input label='Date Used' type='date' placeholder='YYYY-MM-DD' name='DateUsed' value={DateUsed} onChange={this.handleChange}  />
                <Form.Input label='Date Earned' type='date' placeholder='YYYY-MM-DD' name='DateEarned' value={DateEarned} onChange={this.handleChange} required />
              </Form.Group>

              <Button type='submit' fluid color='teal'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default EditRewards;


