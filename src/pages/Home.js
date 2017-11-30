import React, { Component } from "react";
import axios from 'axios';
import Sidebar from './../components/Sidebar';
import Login from './auth';
import { Grid } from 'semantic-ui-react'

var customers = [];
export default class Home extends Component {
  state = {};

  componentDidMount(){
      axios.post('http://localhost:3001/api/session/')
      .then(function(response){
        console.log(response)
        
      })
      .catch(function(error){
        console.log(error);
      });
  }
  render() {
    return (
      <Grid fixed='true' stackable>
          <Grid.Column style={{width:'14%'}}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column  style={{width:'86%'}} >
           

          </Grid.Column>
      </Grid>
    );
  }
}
