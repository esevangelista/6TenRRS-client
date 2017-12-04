import React, { Component } from "react";
import axios from 'axios';
import Sidebar from './../components/Sidebar';
import RewardsMenu from './../components/Reward/RewardsMenu';
import RewardsView from './../components/Reward/RewardsView';
import RewardsRev from './../components/Reward/RewardsRev';
import { Grid, Segment, Header} from 'semantic-ui-react'

export default class Reward extends Component {
  render() {
    return (
      <Grid fixed='true' stackable>
          <Grid.Column style={{width:'14%'}}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column  style={{width:'86%'}} >
            <RewardsMenu />
            <Segment.Group horizontal='true'  >
                <Segment color='teal' padded>
                    <Header size='huge' >Rewards</Header>
                    <RewardsView />
                </Segment>
                <Segment color='orange' padded>
                    <Header size='huge' >Summary</Header>
                    <RewardsRev />
                </Segment>
            </Segment.Group>
          </Grid.Column>
      </Grid>
    )
  }
}

