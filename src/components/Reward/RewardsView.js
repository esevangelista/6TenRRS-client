
import React, { Component} from "react";
import axios from 'axios';
import { Table, Icon } from 'semantic-ui-react'
import EditRewards from './RewardsEdit';



export default class CustomerView extends Component {
  state = {
    rewards:[]
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/reward')
    .then((response) => {
      this.setState({rewards:response.data.data})
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {rewards} = this.state;
    return (
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
            rewards.map((reward) => {
              return (
                <Table.Row key = {reward.RewardID}>
                  <Table.Cell>{reward.RewardID}</Table.Cell>
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
    );
  }
}
