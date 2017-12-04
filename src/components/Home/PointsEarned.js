import React, { Component } from "react";
import { Button, Header, Image, Modal,Form , Segment, Table,Message,Dropdown, Label, Input, Checkbox} from 'semantic-ui-react'
import axios from 'axios';
var  customerOptions = [];

class PointsEarned extends Component{
  state = {customers: [],valueC:'',results:[], showResults:false,notFound:false,}
  handleSubmit = () => {
    axios.get(`http://localhost:3001/api/reward/${this.state.valueC}`)
    .then((response) => {
      this.setState({results:response.data.data, showResults:true})
     
    })
    .catch((error) => {
      this.setState({notFound:true})
      console.log(error);
    });
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
    const {customers,value,results,showResults,notFound} = this.state;
    return(
        <div>
           { showResults && 
            (<Modal size='large' open={showResults} onClose={this.closeModal}  blurring >
              <Modal.Header>Search Results for '{results[0].Name}'</Modal.Header>
                  <Modal.Content  scrolling>
                    <Table singleLine striped color='teal' >
                      <Table.Header >
                        <Table.Row >
                          <Table.HeaderCell>Reward ID</Table.HeaderCell>
                          <Table.HeaderCell>Customer Name</Table.HeaderCell>
                          <Table.HeaderCell>Points</Table.HeaderCell>
                          <Table.HeaderCell>Date Earned</Table.HeaderCell>
                          <Table.HeaderCell>Date Used</Table.HeaderCell>
                          <Table.HeaderCell />
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                        {
                          results.map((reward) => {
                            return (
                              <Table.Row key = {reward.RewardID}>
                                <Table.Cell>{reward.RewardID}</Table.Cell>
                                <Table.Cell>{reward.Name}</Table.Cell>
                                <Table.Cell>{reward.Points}</Table.Cell>
                                <Table.Cell>{reward.DateEarned}</Table.Cell>
                                <Table.Cell>{reward.DateUsed}</Table.Cell>
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
                        content='The customer transaction you are looking for cannot be found'
                    />
                </Modal>
            )
          }
          <Modal dimmer trigger={<Button color='orange' inverted>View Points Earned by a Customer</Button>} >
            <Modal.Header>View All Points Earned By A Customer</Modal.Header>
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
                
                <Button type='submit' fluid color='teal'>VIEW</Button>
                </Form>
            </Modal.Content>
            </Modal>
    
        </div>
    )
  }
  
}

export default PointsEarned;


