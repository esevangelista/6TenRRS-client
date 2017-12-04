import React, { Component } from "react";
import axios from 'axios';
import Sidebar from './../components/Sidebar';
import { Grid, Segment, Header} from 'semantic-ui-react'
import TransactionMenu from './../components/Transaction/TransactionMenu';
import TransactionView from './../components/Transaction/TransactionView';
export default class Transaction extends Component {
  render() {
    return (
      <Grid fixed='true' stackable>
          <Grid.Column style={{width:'14%'}}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column  style={{width:'86%'}} >
            <TransactionMenu />
            <br/>
            <Segment color='teal' padded>
                <Header size='huge'>Recent transactions</Header>
                <TransactionView />
            </Segment>    
          </Grid.Column>
      </Grid>
    )
  }
}

