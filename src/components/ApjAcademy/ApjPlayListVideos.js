import React from 'react';
import { Pagination, Grid, Image} from 'semantic-ui-react'

import SingleVideoView from './SingleVideoView'

class ApjPlayList extends React.Component {
    render() {
      console.log("data from ApjPlayListVideos : ................",this.props.data)

        return ( 
            // <div>
            //     <Image src={ this.props.data[0].snippet.thumbnails.maxres.url} size='small' />
            // </div>
            this.props.data.map( (item) => (
                <SingleVideoView
                    item ={item}
                    // getOnclickEvent = {this.props.getOnclickEvent}
                    key = {'key'+item.id}
                    
                />
             ))
        );
    }
}
export default ApjPlayList;