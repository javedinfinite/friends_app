import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import '../App.css'


export default class Header extends Component {


  render() {

    return (
      <Menu  className='menu' inverted    >
        <Menu.Item
        >
         Datagrokr Employee List
        </Menu.Item>

        <Menu.Item > 
          Account
        </Menu.Item>

        <Menu.Item className="menuclass"
        >
          Anything Else
        </Menu.Item>
      </Menu >
    )
  }
}