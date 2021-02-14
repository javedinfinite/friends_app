import React, { Component } from 'react'
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
import '../App.css'
import { Link, withRouter } from 'react-router-dom';



class Header extends Component {
  state = { activeItem: this.props.location.pathname.substring(1) || 'friends app' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // console.log(this.props.location.pathname.substring(1))
    const { activeItem } = this.state
    return (
      <Segment style={{backgroundColor : '#0a3438'}}>
        <Menu pointing secondary stackable inverted style={{borderColor:'transparent'}} >
        
          <Menu.Item 
            as={Link} to="/"
            name='friends app' 
            active={activeItem === 'friends app'} 
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to="/friends_chat"
            name='friends chat'
            active={activeItem === 'friends chat'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to="/apj_academy"
            name='apj academy'
            active={activeItem === 'apj academy'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to="/my_articles"
            name='my articles'
            active={activeItem === 'my articles'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link} to="/heap_overflow"
            name='heap overflow'
            active={activeItem === 'heap overflow'}
            onClick={this.handleItemClick}
          />
          <Dropdown item text='Tools'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/age_cal">Age Cal</Dropdown.Item>
              <Dropdown.Item as={Link} to="/notes">Notes</Dropdown.Item>
              <Dropdown.Item as={Link} to="/time_cal">Time Cal</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position='right'> 
            <Menu.Item
              as={Link} to="/about"
              position='right'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link} to="/logout"
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
export default withRouter(Header)