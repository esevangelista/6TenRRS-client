import React, { Component } from "react";
import axios from 'axios';
import Sidebar from './../components/Sidebar';
import HomeMenu from './../components/Home/Menu';
import PointsEarned from './../components/Home/PointsEarned';
import PointsEarnedInYr from './../components/Home/PointsEarnedInYr';
import PointsUsedInYr from './../components/Home/PointsUsedinYr';
import ValidPromoStars from './../components/Home/ValidPromoStars';
import UsedPromoStars from './../components/Home/UsedPromoStars';
import { Grid, Header, Segment } from 'semantic-ui-react'

var customers = [];
export default class Home extends Component {
  state = {};

  render() {
    return (
      <Grid fixed='true' stackable>
          <Grid.Column style={{width:'14%'}}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column  style={{width:'86%'}} >
            <HomeMenu />
            <Segment color='teal'>
              <Header size='huge'> Reports </Header>
              <Segment.Group horizontal='true' color='teal'>
                <Segment color='teal'><PointsEarned /></Segment>
                <Segment color='teal'><PointsEarnedInYr /></Segment>
                <Segment color='teal'><PointsUsedInYr /></Segment>
                <Segment color='teal'><ValidPromoStars /></Segment>
                <Segment color='teal'><UsedPromoStars /></Segment>
              </Segment.Group>
            </Segment>

          </Grid.Column>
      </Grid>
    );
  }
}
