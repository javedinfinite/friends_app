import React from 'react'
import { Card, Icon, Image, Dropdown, Divider, Dimmer, Segment, Header, Button } from 'semantic-ui-react'
import {getVideosList, setVideo} from '../../actions/apjAcademyActions'
import {connect} from 'react-redux'
import './index.css';
import _ from 'lodash'


class  SinglePlayListView extends React.Component {
  state = {videolist:[]}

  handleOnclick = (playlistId, playlist) => {
    // this.setState({videolist:[]})
    this.props.dispatch(getVideosList(playlistId, playlist));
 }

handleOnchange = (e, value ) => {
  console.log("value....................",value.value)
  this.props.dispatch(setVideo(value.value));
}

  render () {

    var data = this.props.item;
    const tempList = [];
    console.log("data data.,,,,",data)

    if(this.props.isLoadingPlaylist){
      console.log("emplty calling.....")
      return( 
        <div>
          <Dropdown   text={data.snippet.title} fluid scrolling loading={false} search selection options={tempList} />
          <Divider/>
        </div>
      )}
    else{
    return(

        <div>
          <Dropdown onClick={()=>this.handleOnclick(data.id,data)} onChange={this.handleOnchange} text={data.snippet.title} fluid scrolling loading={false} search selection options={this.props.playlistVideoes} />
          <Divider/>
        </div>

      )}
  }

}


const mapStateToProps = (state, props) => {
  console.log("from singlePlaylistview prop..................",state.apjAcademyReducer.playlistVideoes)
  return {
 
    playlistVideoes: state.apjAcademyReducer.playlistVideoes.map( 
      (item) => ({ key: item.id, text: item.snippet.title, value: item})
    ),
    // selectedPlaylist:  state.apjAcademyReducer.selectedPlaylist,
    // selectedVideo:  state.apjAcademyReducer.selectedVideo,
    // error:  state.apjAcademyReducer.error,
    isLoadingPlaylist: state.apjAcademyReducer.isLoadingPlaylist
  };
};

export default connect(mapStateToProps)(SinglePlayListView);


 