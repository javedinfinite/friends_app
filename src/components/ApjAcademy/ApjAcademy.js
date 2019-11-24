import React, { Component } from 'react';
import {getVideosList} from '../../actions/apjAcademyActions';
import { connect } from 'react-redux';
import {Loader} from 'semantic-ui-react';
import _ from 'lodash'


 
class ApjAcademy extends Component {
  
  componentDidMount() {
    if (_.isEmpty(this.props.selectedPlaylist))
         this.props.dispatch(getVideosList());
  }

  render() {

    const { error, isLoading, selectedPlaylist} = this.props;

    if (error) {
        return <div> Error: {error} </div>;
    } else if (isLoading) {
        return <Loader size="large" indeterminate active />
      }
    else {
      if(_.isEmpty(this.props.selectedPlaylist))
        return null;
      console.log("selectedPlaylist............",selectedPlaylist)
      return (
      <div>{selectedPlaylist.snippet.channelTitle} </div>
      )
    }
  }
}
const mapStateToProps = (state, props) => {
 
  return {
    YoutubePlayList: state.apjAcademyReducer.YoutubePlayList,
    selectedPlaylist:  state.apjAcademyReducer.selectedPlaylist,
    error:  state.apjAcademyReducer.error,
    isLoading: state.apjAcademyReducer.isLoading
  };
};

export default connect(mapStateToProps)(ApjAcademy);
