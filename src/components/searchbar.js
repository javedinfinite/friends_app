import React, { Component } from 'react';


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
                <input
                    value = {this.state.id} 
                    onChange = {(event) => this.onInputChange(event.target.value)} 
                />
            </div>
         );
    }
}
 
export default SearchBar;
