import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CardExampleCardProps = (props) => {
  console.log(props)
  const extra = (
    <div>
      <Icon name='user' />
    	{props.gender}
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon name='computer'/>
      {props.ip_address}
  
    </div>
  )
  console.log(typeof(props.first_name))
  return(
  <div>
    <Card
      style={{'margin-left': '180px',
      'margin-top' : '30px' }}
      header= {props.first_name}
      meta={props.id}
      description= {props.email}
      extra={extra}
    />
  </div>
  )
}
export default CardExampleCardProps