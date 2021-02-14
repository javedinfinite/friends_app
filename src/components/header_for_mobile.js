import React, { Component } from 'react'
import { Menu, Segment,Divider, Popup, Dropdown, Grid, Button,  Header, Icon, Image, Sidebar  } from 'semantic-ui-react'
import '../App.css' 
import { Link, withRouter } from 'react-router-dom';


class SidebarExampleDimmed extends Component {
     
    state = { visible: false , activeItem: this.props.location.pathname.substring(1) || 'friends app' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    handleToggle = (toggle) => this.setState({ visible: toggle })


    render(){
        // console.log(this.props.location.pathname.substring(1))
        const { activeItem } = this.state
        const sidebarStyle = {
            top :'10%',
            maxHeight : '80%',
            backgroundColor : '#0a3438',
          };
        const {visible} = this.state
        return (
            <div>
                <Segment style={{backgroundColor : '#0a3438'}}>
                    <Menu pointing secondary   inverted style={{borderColor:'transparent'}} >
                    {/* <button onClick= {() =>this.handleToggle(true)} class = "ui icon button"><i class="big sidebar icon"></i> </button> */}
                        <Menu.Item as='a' onClick={() =>this.handleToggle(true)}>
                            <Icon name='sidebar' />
                            Expand
                        </Menu.Item>
            
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
                    </Menu>
                </Segment>
                <Sidebar   style={sidebarStyle} as={Menu} animation='overlay' icon='labeled' inverted vertical visible={visible}
                    onHide={() => this.handleToggle(false)} width='thin'>

                    <Menu.Item 
                        as={Link} to="/"
                        name='friends app' 
                        active={activeItem === 'friends app'} 
                        onClick={this.handleItemClick}>
                        <Icon name='home' />friends app
                    </Menu.Item>
                    <Menu.Item
                        as={Link} to="/friends_chat"
                        name='friends chat'
                        active={activeItem === 'friends chat'}
                        onClick={this.handleItemClick}>
                        <Icon name='rocketchat' /> friends chat
                    </Menu.Item>
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
                     <Divider horizontal style={{lineHeight:'3', color : '#98e861'}}>Tools</Divider>
                     <Menu.Item
                        as={Link} to="/age_cal"
                        name='age cal'
                        active={activeItem === 'age cal'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        as={Link} to="/notes"
                        name='notes'
                        active={activeItem === 'notes'}
                        onClick={this.handleItemClick}
                    />        
                    <Menu.Item
                        as={Link} to="/time_cal"
                        name='time cal'
                        active={activeItem === 'time cal'}
                        onClick={this.handleItemClick}
                   />
                    <Menu.Item 
                        fitted
                        onClick={() => this.handleToggle(false)}>
                        <Icon name='close' /> 
                    </Menu.Item>                                       
                </Sidebar>
            </div>
        
          )

    }

}
 


export default withRouter(SidebarExampleDimmed)