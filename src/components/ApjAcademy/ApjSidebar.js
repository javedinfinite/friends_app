import React, { Component } from 'react'
import { Pagination, Grid, Image} from 'semantic-ui-react'
import ApjPlayList from './ApjPlayList';

class ApjSidebar extends Component {
  state = {
    activePage: 1,
    data:[],
    offset: 5
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
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column  style={{ height : '78vh' , overflow: 'auto'}}>
           <ApjPlayList data = {this.props.data} />
           {/* <Image src={ this.props.data[0].snippet.thumbnails.maxres.url} size='small' />
           <Image src={ this.props.data[1].snippet.thumbnails.maxres.url} size='small' />
           <Image src={ this.props.data[2].snippet.thumbnails.maxres.url} size='small' /> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Pagination inverted
              activePage = {this.state.activePage}
              onPageChange = {this.handlePaginationChange}
              totalPages= {50}
            />
        </Grid.Row>
      </Grid>
    )
  }
}

export default ApjSidebar

