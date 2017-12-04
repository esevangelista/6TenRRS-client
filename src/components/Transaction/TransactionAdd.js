import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Message,Dropdown, Label, Input, Checkbox} from 'semantic-ui-react'
import axios from 'axios';

var branchOptions = [], customerOptions = [], productOptions=[];
var choices = [];

const getCost = (products, items) => {
  var cost=0;
  for(var i=0;i<products.length;i++){
    for(var c=0;c<items.length;c++){
      if(items[c]===products[i].ProdID) cost+=products[i].Price
    }
  }
  return cost;
}
const getPromoStar = (promos,itemsArr) =>{
  var promoStar = [];

  for(var i=0;i<promos.length;i++){
    for(var c=0;c<itemsArr.length;c++){
      if(itemsArr[c]===promos[i].ProdID){
        var obj ={
          Starsval: promos[i].StarsEarnable,
          ExprDate: promos[i].ExprDate,
          PromoId: promos[i].PromoID
        }
        promoStar.push(obj)
      }
    }
  }
  return promoStar;
}
class AddTransaction extends Component{
  state = { branches: [],promos:[], customers: [],products: [],valueB:'',valueC:'', valueP: [], PaymentType:'', totalCost:0}
  handleCBChange = (e, { value }) => this.setState({ PaymentType: value })
  handleSubmit = () => {
    const promostar = getPromoStar(this.state.promos,this.state.valueP)
    if(promostar!== []){
      axios.post(`http://localhost:3001/api/promostar/${this.state.valueC}`,promostar)
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error.response.data.data);
      })
    }
    const Points =  parseInt(this.state.totalCost/50)    
    const itemsCount = this.state.valueP.length
    const data = 
      { 
        CustomerId: this.state.valueC, Payment_type: this.state.PaymentType,
        Payment_amt:this.state.totalCost, TransDesc: 'Bought ' + itemsCount + ' product/s'
      }
    axios.post(`http://localhost:3001/api/reward/${data.CustomerId}`,{Points})
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
    axios.post(`http://localhost:3001/api/transaction/${this.state.valueB}`, data)
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

  handleBChange = (e, { value }) =>  this.setState({valueB: value})
  handleCChange = (e, { value }) => this.setState({valueC: value})  
  handlePChange = (e, { value }) => { 
    const products = this.state.products;
    this.setState({valueP: value,totalCost: getCost(products,value)})  
    
  }
  componentDidMount(){
    axios.get('http://localhost:3001/api/promo')
    .then((response) => {      
      this.setState({promos:response.data.data})  
    })
    .catch((error) => {
      console.log(error);
    });

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
    const {branches,customers,value,totalCost,PaymentType} = this.state;
    return(
      <Modal dimmer trigger={<Button color='teal'>New Transaction</Button>} >
          <Modal.Header>Record Transaction</Modal.Header>
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
              <Form.Field required>
                <Header> Select Items </Header>
                <Dropdown
                  fluid
                  upward
                  scrolling
                  multiple
                  onChange={this.handlePChange}
                  options={productOptions}
                  placeholder='Products'
                  selection
                  search
                  value={value}
                />
              </Form.Field>
              <Form.Group horizontal='true' required>
                <Form.Input inline label='Total Price (Php)' name='totalCost' value={totalCost} readOnly/>
                <Form.Field>
                  <Header> Payment Type </Header>
                </Form.Field>
                <Form.Field >
                  <Checkbox
                    radio
                    label='PESO'
                    name='PaymentType'
                    value='PESO'
                    checked={this.state.PaymentType === 'PESO'}
                    onChange={this.handleCBChange}
                  />
                </Form.Field>
                <Form.Field >
                  <Checkbox
                    radio
                    label='POINTS'
                    name='PaymentType'
                    value='POINTS'
                    checked={this.state.PaymentType === 'POINTS'}
                    onChange={this.handleCBChange}
                  />
                </Form.Field>
              </Form.Group>
              <Button type='submit' fluid color='teal'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
    )
  }
  
}

export default AddTransaction;


