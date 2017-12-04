import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Table,Message,Dropdown, Label, Input, Checkbox} from 'semantic-ui-react'
import axios from 'axios';
import EditRewards from './RewardsEdit';
var customerOptions = [];

class SearchRewards extends Component{
  state = { customers: [],valueC:'',rewards:[], showResults:false,notFound:false}
  handleSubmit = () => {
    axios.get(`http://localhost:3001/api/reward/${this.state.valueC}`)
    .then((response)=>{
        console.log(response);
        this.setState({rewards: response.data.data,showResults:true})
    })
    .catch((error)=>{
        console.log(error.response.data.data);
        this.setState({notFound: true})
    })
  }

  handleCChange = (e, { value }) => this.setState({valueC: value})  
  closeModal = () => this.setState({showResults:false})
  closeMessage = () => this.setState({notFound:false})
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
    const {customers,value,rewards,showResults,notFound} = this.state;
    return(
        <div>
           { showResults && 
            (<Modal open={showResults} onClose={this.closeModal}  blurring >
              <Modal.Header>Search Results for '{rewards[0].Name}'</Modal.Header>
                  <Modal.Content  scrolling>
                  <Table singleLine striped color='teal'  >
                    <Table.Header >
                    <Table.Row >
                        <Table.HeaderCell>Reward ID</Table.HeaderCell>
                        <Table.HeaderCell>Customer ID</Table.HeaderCell>
                        <Table.HeaderCell>Customer Name</Table.HeaderCell>
                        <Table.HeaderCell>Points</Table.HeaderCell>
                        <Table.HeaderCell>Date Earned</Table.HeaderCell>
                        <Table.HeaderCell>Date Used</Table.HeaderCell>
                        <Table.HeaderCell />
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                          rewards.map((reward) => {
                            return (
                                <Table.Row key = {reward.RewardID}>
                                <Table.Cell>{reward.RewardID}</Table.Cell>
                                <Table.Cell> {reward.CustomerId}</Table.Cell>
                                <Table.Cell>{reward.Name}</Table.Cell>
                                <Table.Cell>{reward.Points}</Table.Cell>
                                <Table.Cell>{reward.DateEarned}</Table.Cell>
                                <Table.Cell>{reward.DateUsed}</Table.Cell>
                                <Table.Cell collapsing><EditRewards value={reward}/></Table.Cell>
                                </Table.Row>
                            );
                          })
                        }
                        </Table.Body>  
                    </Table>
                  </Modal.Content>
              </Modal> 
            )
          }
          {notFound && 
            (
                <Modal open={notFound} onClose={this.closeMessage} basic blurring='true'>
                    <Message
                        warning
                        header='Not Found'
                        content='The rewards you are looking for cannot be found'
                    />
                </Modal>
            )
          }
          <Modal dimmer trigger={<Button color='orange' inverted>Search Customer Rewards</Button>} >
            <Modal.Header>Search for Customer's Rewards</Modal.Header>
            <Modal.Content >
                <Form onSubmit={this.handleSubmit}>
               
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
                
                <Button type='submit' fluid color='teal'>SEARCH</Button>
                </Form>
            </Modal.Content>
            </Modal>
    
        </div>
    )
  }
  
}

export default SearchRewards;


