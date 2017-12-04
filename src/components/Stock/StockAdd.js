import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message,Dropdown, Label, Input, Checkbox} from 'semantic-ui-react'
import axios from 'axios';

var branchOptions = [], productOptions=[];
var choices = [];

class AddStock extends Component{
  state = { branches: [],products: [],valueB:'', valueP: '', Quantity:'' }
  handleSubmit = () => {
    const data = { Product_id : this.state.valueP, Quantity: this.state.Quantity}
    this.setState({})
    axios.post(`http://localhost:3001/api/stock/${this.state.valueB}`,data)
    .then((response)=>{
      console.log(response)
      window.location.reload()
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  handleChange = (e,{value}) => this.setState({Quantity:value})
  handleBChange = (e, { value }) =>  this.setState({valueB: value})
  handlePChange = (e, { value }) =>  this.setState({valueP: value});   
  
  componentDidMount(){
    
    axios.get('http://localhost:3001/api/branch')
    .then((response) => {      
      this.setState({branches:response.data.data})      
      for(var i=0;i<this.state.branches.length; i++){
        var choice = {
          key : this.state.branches[i].BranchID, 
          value: this.state.branches[i].BranchID, 
          text: this.state.branches[i].BranchLocation
        }
        branchOptions.push(choice);
      }
    })
    .catch((error) => {
      console.log(error);
    });
    
  
    axios.get('http://localhost:3001/api/product')
    .then((response) => {
      this.setState({products:response.data.data})
      for(var i=0;i<this.state.products.length; i++){
        var choice = {
          key : this.state.products[i].ProdID, 
          value: this.state.products[i].ProdID, 
          text: this.state.products[i].ProdName + '(Php ' + this.state.products[i].Price + ' )',
        }
        productOptions.push(choice);
      }
    })
    .catch((error) => {
      console.log(error);      
    });
  }
	render(){
    const {branches,value, Quantity} = this.state;
    return(
      <Modal dimmer trigger={<Button color='teal'>Add Stock</Button>} >
          <Modal.Header>Add Stock</Modal.Header>
          <Modal.Content >
            <Form onSubmit={this.handleSubmit}>
              <Form.Field required>
                <Header> Select a Branch </Header>
                <Dropdown
                  fluid
                  scrolling
                  onChange={this.handleBChange}
                  options={branchOptions}
                  placeholder='Branch'
                  selection
                  search
                  value={value}
                />
              </Form.Field>
              
              <Form.Field required>
                <Header> Select Items </Header>
                <Dropdown
                  fluid
                  upward
                  scrolling
                  onChange={this.handlePChange}
                  options={productOptions}
                  placeholder='Products'
                  selection
                  search
                  value={value}
                />
              </Form.Field>
              <Form.Input type='number' label='Quantity' name='Quantity' value={Quantity} onChange={this.handleChange} required />
              <Button type='submit' fluid color='teal'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
    )
  }
  
}

export default AddStock;


