import React from 'react';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash'

const ApjVideoPlay = (props) => {
    // console.log(props);
    // const video = props.video;

    // if (!video) {
    //     return <div>Loading...</div>;
    // }
    // const videoId = video.id.videoId;  
    // const videoId = 'VTnDYxwhSaI'
     if(_.isEmpty(props.data)  )
     return null;
    // console.log("selectedVideo.................",props.data.snippet.resourceId.videoId)
    console.log("selectedVideo from ApjVideoPlay.................",props.data)
    
    const videoId = props.data.snippet.resourceId.videoId
    const video = props.data;
    const url = `http://www.youtube.com/embed/${videoId}`;//creating a link of the concern video using video ID so that we can play the video

 

    return (
        <React.Fragment>
               
                {/* The iframe tag specifies an inline frame.
                An inline frame is used to embed another document within the current HTML document. */}
                <Grid.Row>
                {/* <p>All is well</p> */}
                <iframe  className = "iframe-design" allowFullScreen="allowfullscreen" width="80%" height="400vh" title=" " src={url}  ></iframe>
                 </Grid.Row>
                <Grid.Row className="v_title">
                    <h3>{video.snippet.title}</h3>
                </Grid.Row>
                <Grid.Row className="v_description">
                    {video.snippet.description}
                </Grid.Row>
        </React.Fragment>
    );
};
export default ApjVideoPlay; 