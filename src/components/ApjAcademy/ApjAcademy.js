import React, { Component } from 'react';
import {getPlayLists, getVideosList} from '../../actions/apjAcademyActions';
import { connect } from 'react-redux';
import {Loader, Grid, Sidebar} from 'semantic-ui-react';
import ApjSidebar from './ApjSidebar'
import ApjRightSidebar from './ApjRightSidebar';
import ApjVideoPlay from './ApjVideoPlay';
import YoutubeSearchBar from './YoutubeSearchBar';
import './index.css';
import _ from 'lodash'


 
class ApjAcademy extends Component {
  
  componentDidMount() {
    if (_.isEmpty(this.props.selectedPlaylist))
         this.props.dispatch(getPlayLists());
    if (_.isEmpty(this.props.selectedVideo))
         this.props.dispatch(getVideosList('PLfjlOytYZqaoswoC2v4G_Y5aWn9RZW57Y'));
  }

  render() {

    const { error, isLoading, selectedPlaylist, YoutubePlayList, playlistVideoes, selectedVideo} = this.props;

    if (error) {
        return <div> Error: {error} </div>;
    } else if (isLoading) {
        return <Loader size="large" indeterminate active />
      }
    else {
      if(_.isEmpty(this.props.selectedPlaylist)  )
        return null;
      // console.log("playlistVideoes............",playlistVideoes)
      return (
        <Grid celled='internally'>

            <Grid.Row>
              <Grid.Column width={3}  >
                
                 <ApjSidebar  data = {YoutubePlayList} />  
                
              </Grid.Column> 
              <Grid.Column width={13}>
                <Grid.Row>
                <YoutubeSearchBar/>

                </Grid.Row>
                <Grid.Row>
                <ApjVideoPlay data= {selectedVideo} /> 

                </Grid.Row>
              </Grid.Column>
              {/* <Grid.Column width={3}>
                  <ApjRightSidebar  data = {playlistVideoes} /> 
              </Grid.Column> */}
            </Grid.Row>

          </Grid>
      )
    }
  }
}
const mapStateToProps = (state, props) => {
 
  return {
    YoutubePlayList: state.apjAcademyReducer.YoutubePlayList,
    playlistVideoes: state.apjAcademyReducer.playlistVideoes,
    selectedPlaylist:  state.apjAcademyReducer.selectedPlaylist,
    selectedVideo:  state.apjAcademyReducer.selectedVideo,
    error:  state.apjAcademyReducer.error,
    isLoading: state.apjAcademyReducer.isLoading
  };
};

export default connect(mapStateToProps)(ApjAcademy);
