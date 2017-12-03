import React, { Component } from "react";
import axios from 'axios';
import Sidebar from './../components/Sidebar';
import BranchMenu from './../components/BranchMenu';
import BranchView from './../components/BranchView';
import { Grid, Segment, Header} from 'semantic-ui-react'

export default class Branch extends Component {
  
  render() {

    return (
      <Grid fixed='true' stackable>
          <Grid.Column style={{width:'14%'}}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column  style={{width:'86%'}} >
            <BranchMenu />
            <Segment padded >
              <Header size='huge' >Branches</Header>
              <BranchView />
            </Segment>

          </Grid.Column>
      </Grid>
    )
  }
}

