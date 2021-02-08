import React from 'react';
import { Pagination, Grid, Image} from 'semantic-ui-react'

import SinglePlayListView from './SinglePlayListView'

class ApjPlayList extends React.Component {
    render() {

        return ( 
            // <div>
            //     <Image src={ this.props.data[0].snippet.thumbnails.maxres.url} size='small' />
            // </div>
            this.props.data.map( (item) => (
                <SinglePlayListView
                    item ={item}
                    // getOnclickEvent = {this.props.getOnclickEvent}
                    key = {'key'+item.id}
                    
                />
             ))
        );
    }
}
export default ApjPlayList;