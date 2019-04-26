import React, { Component } from 'react'
import { Pagination} from 'semantic-ui-react'
import SingleEmployee from './list';
class PaginationComponent extends Component {
  state ={
    activePage:1,
    data:[[{"id":0,"first_name":"","last_name":"","email":"ctohill0@google.nl","gender":"Female","ip_address":"3.92.152.151"}]]
  }
  //axios.get('localhost:3000/id')
  handlePaginationChange = (e, { activePage }) => {
    let start = activePage===1?1:(activePage-1)*20+1;
    let end = activePage===1?20:(activePage)*20;
    let Data = this.props.data.filter(data => (data.id>=start && data.id<=end));
    this.setState({ activePage, data:Data })
  }

  render() {
    const { activePage } = this.state
    
    console.log("It's render method")
    return (
        <div>
          <Pagination
            activePage = {activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={50}
          />
        <SingleEmployee data = {this.state.data}/>
        {console.log(activePage)}
        </div>
    )
  }
}

export default PaginationComponent

