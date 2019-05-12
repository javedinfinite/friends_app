import React, { Component } from 'react';
import {Search} from 'semantic-ui-react';

class SearchComponent extends Component {
 
    render() { 
        return ( 
            <div className="search-bar">
                <Search
                     placeholder={"Search Friends App"}
                />
            </div>
         );
    }
}
 
export default SearchComponent;
