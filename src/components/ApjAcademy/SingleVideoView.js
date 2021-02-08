import React from 'react'
import { Card, Icon, Image, Divider, Dimmer,Header, Segment } from 'semantic-ui-react'
import {setVideo} from '../../actions/apjAcademyActions'
import {connect} from 'react-redux'
import _ from 'lodash'


class  SingleVideoView extends React.Component {
  state = {}
  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  handleOnclick = () => {
    this.props.dispatch(setVideo(this.props.item));
 }
  render () {
    const { active } = this.state
    const content = (
      <div>
        <Icon name='play' />
        <Header as='h2' inverted> Play 
        </Header>
      </div>
    )
    const data = this.props.item;
    // let photoId = this.props.item.photoId != undefined? this.props.item.photoId : 3;
    // console.log("data from singleVideoView : ................",data.snippet.thumbnails.maxres.url)
    if(_.isEmpty(this.props.item)  )
      return null;
    return(
        
        // <p>{data.snippet.thumbnails.default.url}</p>
      <div onClick={this.handleOnclick} >
        <a >
          <Card className="card_class">
            
            <Dimmer.Dimmable 
              // as={Segment}
              // dimmed={active}
              // dimmer={{ active, content }}
              onMouseEnter={this.handleShow}
              onMouseLeave={this.handleHide} 
              // size='small'
              // src={data.snippet.thumbnails.default.url}
            >
              <Image size='small'    src={data.snippet.thumbnails.default.url} />
              <Card.Content>
                <Card.Header style={{color:'black',fontWeight: 'bold'}}><Icon name='youtube' /> {data.snippet.title}</Card.Header>
                <Card.Meta>
                  <p className='id'>Channel Title :  {data.snippet.channelTitle}</p>
                  <p className='email'>Published At : {data.snippet.publishedAt}</p>
                </Card.Meta>
              </Card.Content>
              {/* <Card.Content extra>
              </Card.Content> */}
              <Dimmer active={active}>{content}</Dimmer> 
            </Dimmer.Dimmable>

          </Card>
          
        </a>
       <Divider/>
      </div>
      )
  }

}

export default connect()(SingleVideoView)