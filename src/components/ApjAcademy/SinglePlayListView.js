import React from 'react'
import { Card, Icon, Image, Divider, Dimmer, Segment, Header, Button } from 'semantic-ui-react'
import {getVideosList} from '../../actions/apjAcademyActions'
import {connect} from 'react-redux'
import './index.css';


class  SinglePlayListView extends React.Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  handleOnclick = () => {
    this.props.dispatch(getVideosList(this.props.item.id, this.props.item));
 }
  render () {

    const data = this.props.item;
    // let photoId = this.props.item.photoId != undefined? this.props.item.photoId : 3;
    const { active } = this.state
    const content = (
      <div>
        <Icon name='play' />
        <Header as='h2' inverted> Play All
        </Header>
      </div>
    )
    return(
      <div onClick={this.handleOnclick} >
        <a  >
          <Card className="card_class">
            <Dimmer.Dimmable
              as={Image}
              dimmed={active}
              dimmer={{ active, content }}
              onMouseEnter={this.handleShow}
              onMouseLeave={this.handleHide}
              size='medium'
              src={data.snippet.thumbnails.maxres.url}
            />
              
            <Card.Content>
              <Card.Header><Icon name='list layout' /> {data.snippet.title}</Card.Header>
              <Card.Meta>
                <p className='id'>Channel Title :  {data.snippet.channelTitle}</p>
                <p className='email'>Published At : {data.snippet.publishedAt}</p>
              </Card.Meta>
            </Card.Content>
            {/* <Card.Content extra>
            </Card.Content> */}
          </Card>
        </a>
       <Divider/>
      </div>
      )
  }

}

export default connect()(SinglePlayListView)