import React, { Component } from 'react'
import { Pagination,Grid, Sticky} from 'semantic-ui-react'
import DatasetList from './datasetList';

class Dataset extends Component {
  state = {
    activePage: 1,
    data:[],
    offset: 20
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
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column  style={{ height : '80vh' , overflow: 'auto'}}>
           <DatasetList data = {this.state.data} getOnclickEvent = {this.props.getOnclickEvent} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Pagination inverted small
              activePage = {this.state.activePage}
              onPageChange = {this.handlePaginationChange}
              totalPages= {50}
            />
        </Grid.Row>
      </Grid>
    )
  }
}

export default Dataset

