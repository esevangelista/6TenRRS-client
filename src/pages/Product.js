import React, { Component } from "react";
import axios from 'axios';
import Sidebar from './../components/Sidebar';
import ProductMenu from './../components/ProductMenu';
import ProductView from './../components/ProductView';
import PromoView from './../components/PromoView';
import { Grid, Segment, Header} from 'semantic-ui-react'

export default class Product extends Component {
  

  render() {
    return (
      <Grid fixed='true' stackable>
          <Grid.Column style={{width:'14%'}}>
            <Sidebar />
          </Grid.Column>
          <Grid.Column  style={{width:'86%'}} >
            <ProductMenu />
            <br/>
            <Grid style={{'margin-left':'5px'}} stackable>
                <Grid.Column width={7}>
                    <Segment color='teal'>
                        <Header size='huge'>Products</Header>
                        <ProductView />
                    </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Segment color='orange'>
                        <Header size='huge'>Promos</Header>
                        {/*insert search component here*/}
                        <PromoView />
                    </Segment>
                </Grid.Column>
            </Grid>

          </Grid.Column>
      </Grid>
    )
  }
}

