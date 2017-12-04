import React, { Component } from 'react'
import { Sidebar, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarNav extends Component {
  render() {
    return (
      <Sidebar as={Menu} style={{width:'200px'}} visible={true} vertical inverted>

        <Menu.Item as='a' href='/' name='appName' style={{background:'#59b8ba'}} header>
            <h1>{' '}6TENRRS</h1>
        </Menu.Item>

        <Menu.Item name='overview'  as='a' href='/' >
          <div>
              <Icon circular inverted color='teal'  name='dashboard' size='small'/>
              {' '}Overview
          </div>
        </Menu.Item>

        <Menu.Item name='transactions' as='a' href='/transactions'>
          <div>
            <Icon circular inverted color='teal' name='payment'  size='small' />
            {' '}Transactions
            </div>
        </Menu.Item>

        <Menu.Item name='customers'  as='a' href='/customer'>
          <div>
            <Icon circular inverted color='teal' name='users'  size='small' />
            {' '}Customers
          </div>
        </Menu.Item>

        <Menu.Item name='branches'  as='a' href='/branch'>
          <div>
            <Icon circular inverted color='teal' name='building outline'  size='small' />
            {' '}Branches
          </div>
        </Menu.Item>

        <Menu.Item name='products'  as='a' href='/product'>
          <div>
            <Icon circular inverted color='teal' name='barcode'  size='small' />
            {' '}Products
          </div>
        </Menu.Item>
        
        <Menu.Item name='stocks'  as='a' href='/stock'>
           <div>
            <Icon circular inverted color='teal' name='industry'  size='small' />
            {' '}Stocks
          </div>
        </Menu.Item>
        <Menu.Item name='rewards'  as='a' href='/rewards'>
           <div>
            <Icon circular inverted color='teal' name='money'  size='small' />
            {' '}Rewards
          </div>
        </Menu.Item>
      </Sidebar>
    )
  }
}

export default SidebarNav