import React, { Component } from 'react'
import { Pagination, Grid, Image, Divider} from 'semantic-ui-react'
import ApjPlayList from './ApjPlayList';

class ApjSidebar extends Component {
  state = {
    activePage: 1,
    data:[],
    offset: 5
  }


  componentDidMount(){
 

  }
  

  render() {
    return (
      <Grid className="sidebar_class">
        <Grid.Row centered  style={{color: "white"}} ><b> <h3>APJ-Academy Youtube Playlists </h3></b></Grid.Row>
        <Grid.Row>
          <Grid.Column  style={{ height : '100vh' , overflow: 'auto'}}>
   
           <ApjPlayList data = {this.props.data} />
 
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
 
        </Grid.Row>
      </Grid>
    )
  }
}

export default ApjSidebar

