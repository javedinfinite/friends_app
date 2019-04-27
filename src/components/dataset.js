import React, { Component } from 'react'
import { Pagination} from 'semantic-ui-react'
import SingleEmployee from './list';

class Dataset extends Component {
  state = {
    activePage: 1,
    data:[],
    offset: 3
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
        <div>
          <Pagination
            activePage = {this.state.activePage}
            onPageChange = {this.handlePaginationChange}
            totalPages= {50}
          />
        <SingleEmployee data = {this.state.data}/>
        </div>
    )
  }
}

export default Dataset

