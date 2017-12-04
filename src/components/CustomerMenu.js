import React, { Component } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import Sidebar from './../components/Sidebar';
import { Grid , Menu, Input, Image, Form} from 'semantic-ui-react'
import AddCustomer from './../components/addUser';
import SearchCustomer from './../components/CustomerSearch';


export default class CustomerMenu extends Component {
  state = { activeItem: '' , search:''}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state;

    return (

      <Menu pointing secondary size='large'>
        <Menu.Item name='New' active={activeItem === 'New'}><AddCustomer /></Menu.Item>
        <Menu.Item name='logo' active={activeItem === 'logo'} position='right'><Image src='./logo.png' size='mini' centered/></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <SearchCustomer />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
         
    )
  }
}

