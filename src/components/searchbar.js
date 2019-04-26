import React, { Component } from 'react';
import {Search} from 'semantic-ui-react';

class SearchBar extends Component {
    state = { 
        id:null
     }
     onInputChange =(id) => {
        this.setState({id});
        this.props.onSearchTermChange(id);
    }
    render() { 
        return ( 
            <div className="search-bar">
                <Search
                    style = {{'margin': '30px 0px 0px 200px'}}
                    value = {this.state.id} 
                    onSearchChange = {(event) => this.onInputChange(event.target.value)} 
                    results = {this.props.onResultChange}
                />
            </div>
         );
    }
}
 
export default SearchBar;
