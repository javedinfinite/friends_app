import React, { Component } from 'react'
import { Pagination, Grid, Image, Divider} from 'semantic-ui-react'
import  ApjPlayListVideos from './ApjPlayListVideos';
import { connect } from 'react-redux';
import _ from 'lodash'
import './index.css'


class ApjRightSidebar extends Component {
  state = {
    activePage: 1,
    data:[],
    offset: 5,
    selectedPlaylist:'happy hours'
  }

  handlePaginationChange = (e, { activePage }) => {
    const start = activePage===1 ? 1 : (activePage-1) * this.state.offset+1;
    const end = activePage===1 ? this.state.offset : (activePage) * this.state.offset;
    const data = this.props.data.filter(data => (data.id>=start && data.id<=end));
    this.setState({ activePage, data: data })
  }

  componentDidMount(){
    const data = this.props.data.filter(data => (data.id>=1 && data.id<=this.state.offset));
    this.setState({ data: data })
    console.log("data : ................",this.props.data)
  }

  render() {
    const { error, isLoading, selectedPlaylist, YoutubePlayList, playlistVideoes, selectedVideo} = this.props;

    if(_.isEmpty(this.props.data)  )
      return null;
    return (
      <Grid className='sidebar_class'>
        <Grid.Row  centered  style={{color: "white"}}> <b > <h3 > Playing : { selectedPlaylist.snippet.title} </h3></b></Grid.Row>
        <Grid.Row>
          <Grid.Column  style={{ height : '70vh' , overflow: 'auto'}}>
         
          <Divider />
           <ApjPlayListVideos data = {this.props.data} />
           {/* <Image src={ this.props.data[0].snippet.thumbnails.maxres.url} size='small' />
           <Image src={ this.props.data[1].snippet.thumbnails.maxres.url} size='small' />
           <Image src={ this.props.data[2].snippet.thumbnails.maxres.url} size='small' />
           <Image src={ this.props.data[3].snippet.thumbnails.maxres.url} size='small' />
           <Image src={ this.props.data[4].snippet.thumbnails.maxres.url} size='small' /> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          {/* <Pagination inverted
              activePage = {this.state.activePage}
              onPageChange = {this.handlePaginationChange}
              totalPages= {50}
            /> */}
        </Grid.Row>
      </Grid>
    )
  }
}

// export default ApjRightSidebar
const mapStateToProps = (state, props) => {
  console.log("from rightsidebar..................",state.apjAcademyReducer.selectedPlaylist)
  return {
    // YoutubePlayList: state.apjAcademyReducer.YoutubePlayList,
    // playlistVideoes: state.apjAcademyReducer.playlistVideoes,
    selectedPlaylist:  state.apjAcademyReducer.selectedPlaylist,
    // selectedVideo:  state.apjAcademyReducer.selectedVideo,
    // error:  state.apjAcademyReducer.error,
    // isLoading: state.apjAcademyReducer.isLoading
  };
};

export default connect(mapStateToProps)(ApjRightSidebar);

