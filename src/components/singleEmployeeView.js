import React from 'react'
import { Card, Icon, Image, Divider } from 'semantic-ui-react'
import {getEmployee} from '../actions/employeeAction'
import {connect} from 'react-redux'
 
var randomImages = [
  require('../images/image7.png'),
  require('../images/image8.png'),
  require('../images/image9.png'),
  require('../images/image1.jpg'),
  require('../images/image2.jpg'),
  require('../images/image3.jpg'),
  require('../images/image4.jpg'),
  require('../images/image5.jpg'),
  require('../images/image6.jpg')
];

class  SingleEmployeeView extends React.Component {
  
  handleOnclick = () => {
    this.props.dispatch(getEmployee(this.props.item.id));
 }
  render () {

    const data = this.props.item;
    let photoId = this.props.item.photoId != undefined? this.props.item.photoId : 3;

    return(
      <div onClick={this.handleOnclick} >
        <a href='#'>
          <Card className="card_class">
            
            <Image size='small' circular  src={randomImages[photoId]} />
            <Card.Content>
              <Card.Header><Icon name='user' /> {data.first_name}</Card.Header>
              <Card.Meta>
                <p className='id'>Employee ID :  {data.id}</p>
                <p className='email'>Email ID : {data.email}</p>
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

export default connect()(SingleEmployeeView)