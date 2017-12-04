import React, { Component } from "react";
import axios from 'axios';
import { Grid , Menu, Input, Image, Form} from 'semantic-ui-react'
import Sidebar from './../Sidebar';
import AddBranch from './BranchAdd';
import SearchBranch from './BranchSearch';


export default class BranchMenu extends Component {
  state = { activeItem: '' , search:''}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state;

    return (

      <Menu pointing secondary size='large'>
        <Menu.Item name='New' active={activeItem === 'New'}><AddBranch /></Menu.Item>
        <Menu.Item name='logo' active={activeItem === 'logo'} position='right'><Image src='./logo.png' size='mini' centered/></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <SearchBranch />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
         
    )
  }
}

