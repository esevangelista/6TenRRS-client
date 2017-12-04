import React, { Component } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import Sidebar from './../components/Sidebar';
import { Grid , Menu, Input, Image, Form} from 'semantic-ui-react'
import AddStock from './../components/StockAdd';
import SearchStock from './../components/StockSearch';


export default class StockMenu extends Component {
  state = { activeItem: '' , search:''}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state;

    return (

      <Menu pointing secondary size='large'>
        <Menu.Item name='New' active={activeItem === 'New'}><AddStock /></Menu.Item>
        <Menu.Item name='logo' active={activeItem === 'logo'} position='right'><Image src='./logo.png' size='mini' centered/></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <SearchStock />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
         
    )
  }
}

