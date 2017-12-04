import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message, Dropdown} from 'semantic-ui-react'
import axios from 'axios';

var customerOptions = [];

class AddReward extends Component{
    state = {customers: [],valueC:'', Points:0}
    handleChange = (e, { name, value }) => this.setState({ [name]: value })
    handleCChange = (e, { value }) => this.setState({valueC: value})      
    handleSubmit = () => {
        const data = {Points :this.state.Points};    
        this.setState({ Points: ''})
        axios.post(`http://localhost:3001/api/reward/${this.state.valueC}`, data)
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
    componentDidMount(){
        
        axios.get('http://localhost:3001/api/customer')
        .then((response) => {
          this.setState({customers:response.data.data})
          for(var i=0;i<this.state.customers.length; i++){
            var choice = {
              key : this.state.customers[i].CustomerID, 
              value: this.state.customers[i].CustomerID, 
              text: this.state.customers[i].Name
            }
            customerOptions.push(choice);
          }
        })
        .catch((error) => {
          console.log(error);
        });
        
    }

	render(){
    const {Points, value} = this.state;
    return(
      <Modal dimmer size='mini' trigger={<Button color='teal'>Add Reward</Button>} onSubmit={this.handleSubmit}>
          <Modal.Header>Add Reward</Modal.Header>
          <Modal.Content >
            <Form >
                 <Form.Field required>
                    <Header> Select a Customer </Header>
                    <Dropdown
                    fluid
                    scrolling
                    onChange={this.handleCChange}
                    options={customerOptions}
                    placeholder='Customer'
                    selection
                    search                    
                    value={value}
                    />
                </Form.Field>
                <Form.Input label='Reward Points' inline  placeholder='points' name='Points' value={Points} onChange={this.handleChange} required fluid/>
                <Button type='submit' color='teal' fluid>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>

    )
  }
  
}

export default AddReward;


