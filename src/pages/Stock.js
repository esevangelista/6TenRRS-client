import React, { Component } from "react";
import axios from 'axios';
import Sidebar from './../components/Sidebar';
import StockMenu from './../components/StockMenu';
import StockView from './../components/StockView';
import { Grid, Segment, Header} from 'semantic-ui-react'

export default class Stock extends Component {
  
  render() {

    return (
      <Grid fixed='true' stackable>
          <Grid.Column style={{width:'14%'}}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column  style={{width:'86%'}} >
            <StockMenu />
            <Segment padded >
              <Header size='huge' >Stocks</Header>
              <StockView />
            </Segment>

          </Grid.Column>
      </Grid>
    )
  }
}

