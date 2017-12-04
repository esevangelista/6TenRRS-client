import React, { Component } from "react";
import axios from 'axios';
import { Grid , Menu, Input, Image, Form} from 'semantic-ui-react'
import Sidebar from './../Sidebar';
import AddCustomer from './CustomerAdd';
import SearchCustomer from './CustomerSearch';


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

