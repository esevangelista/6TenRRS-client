import React, { Component } from 'react'
import { Sidebar, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarNav extends Component {
  render() {
    return (
      <Sidebar as={Menu} style={{width:'200px'}} visible={true} vertical inverted>

        <Menu.Item as='a' href='/' name='appName' style={{background:'#59b8ba'}} header>
            <h1>{' '}6ten RSS</h1>
        </Menu.Item>

        <Menu.Item name='customers'  as='a' href='/customer'>
          <div>
            <Icon circular inverted color='teal' name='users'  size='small' />
            {' '}Customers
          </div>
        </Menu.Item>

        <Menu.Item name='transactions' as='a' href='/transactions'>
          <div>
            <Icon circular inverted color='teal' name='payment'  size='small' />
            {' '}Transactions
            </div>
        </Menu.Item>

        <Menu.Item name='branches'  as='a' href='/branch'>
          <div>
            <Icon circular inverted color='teal' name='building outline'  size='small' />
            {' '}Branches
          </div>
        </Menu.Item>

        <Menu.Item name='promos'  as='a' href='/promo'>
          <div>
            <Icon circular inverted color='teal' name='bar chart'  size='small' />
            {' '}Promos
          </div>
        </Menu.Item>

        <Menu.Item name='products'  as='a' href='/product'>
          <div>
            <Icon circular inverted color='teal' name='barcode'  size='small' />
            {' '}Products
          </div>
        </Menu.Item>

        <Menu.Item name='promostar'  as='a' href='/promostar'>
           <div>
            <Icon circular inverted color='teal' name='star'  size='small' />
            {' '}Promo Stars
          </div>
        </Menu.Item>

        <Menu.Item name='reward'  as='a' href='/reward'>
           <div>
            <Icon circular inverted color='teal' name='thumbs up'  size='small' />
            {' '}Rewards
          </div>
        </Menu.Item>
        
        <Menu.Item name='stocks'  as='a' href='/stock'>
           <div>
            <Icon circular inverted color='teal' name='industry'  size='small' />
            {' '}Stocks
          </div>
        </Menu.Item>

      </Sidebar>
    )
  }
}

export default SidebarNav