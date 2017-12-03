import React, { Component } from "react";
import axios from 'axios';
import Sidebar from './../components/Sidebar';
import CustomerMenu from './../components/CustomerMenu';
import CustomerView from './../components/CustomerView';
import { Grid, Segment, Header} from 'semantic-ui-react'

export default class Customer extends Component {
  

  render() {

    return (
      <Grid fixed='true' stackable>
          <Grid.Column style={{width:'14%'}}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column  style={{width:'86%'}} >
            <CustomerMenu />
            <Segment padded >
              <Header size='huge' >Customers</Header>
              <CustomerView />
            </Segment>

          </Grid.Column>
      </Grid>
    )
  }
}

