import React, { Component } from "react";
import axios from 'axios';
import Sidebar from './../components/Sidebar';
import BranchMenu from './../components/Branch/BranchMenu';
import BranchView from './../components/Branch/BranchView';

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
            <Grid style={{'margin-left':'5px'}} stackable centered>
                <Grid.Column width={10}>
                    <Segment color='teal' fluid textAlign='center' size='large'>
                      <Header size='huge' >6Ten Branches</Header>
                      <BranchView />
                    </Segment>
                </Grid.Column>
            </Grid>
          </Grid.Column>
      </Grid>
    )
  }
}

