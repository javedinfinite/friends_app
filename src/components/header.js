import React, { Component } from 'react'
import { Menu,Image,Segment } from 'semantic-ui-react'
import '../App.css'
import SearchComponent from './SearchComponent'
import img from '../images/friendsApp.png'


export default class Header extends Component {
  state = { activeItem: 'Friends App' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Segment style={{backgroundColor : '#0a3438'}}>
        <Menu pointing secondary stackable inverted style={{borderColor:'transparent'}} >
        
          <Menu.Item 
            name='Friends App' 
            active={activeItem === 'Friends App'} 
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              position='right'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}