import React from 'react'
import { Card, Icon, Image, Divider } from 'semantic-ui-react'
// import {getEmployee} from '../actions/employeeAction'
import {connect} from 'react-redux'

class  SinglePlayListView extends React.Component {
  
  handleOnclick = () => {
    // this.props.dispatch(getEmployee(this.props.item.id));
 }
  render () {

    const data = this.props.item;
    // let photoId = this.props.item.photoId != undefined? this.props.item.photoId : 3;

    return(
      <div onClick={this.handleOnclick} >
        <a href='#'>
          <Card className="card_class">
            
            <Image size='small' circular  src={data.snippet.thumbnails.maxres.url} />
            <Card.Content>
              <Card.Header><Icon name='list layout' /> {data.snippet.title}</Card.Header>
              <Card.Meta>
                <p className='id'>Channel Title :  {data.snippet.channelTitle}</p>
                <p className='email'>Published At : {data.snippet.publishedAt}</p>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              
            </Card.Content>
          </Card>
        </a>
       <Divider/>
      </div>
      )
  }

}

export default connect()(SinglePlayListView)