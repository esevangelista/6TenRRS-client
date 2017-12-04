import React, { Component } from "react";
import axios from 'axios';
import { Grid , Menu, Input, Image, Form} from 'semantic-ui-react'
import Sidebar from './../Sidebar';
import AddReward from './RewardAdd';
import SearchReward from './RewardsSearch';


export default class RewardMenu extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state;

    return (

      <Menu pointing secondary size='large'>
        <Menu.Item name='New' active={activeItem === 'New'}><AddReward /></Menu.Item>
        <Menu.Item name='logo' active={activeItem === 'logo'} position='right'><Image src='./logo.png' size='mini' centered/></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <SearchReward/>
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
         
    )
  }
}

