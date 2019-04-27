import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const CardExampleCardProps = (props) => {
  const extra = (
    <div>
      <Icon name='user' />
    	{props.gender}
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon name='computer'/>
      {props.ip_address}
  
    </div>
  )
  return(
  <div>
    <Card
      style={
        {
          'marginLeft': '180px',
          'marginTop' : '30px' 
        }
      }
      header= {props.first_name}
      meta={props.id}
      description= {props.email}
      extra={extra}
    />
  </div>
  )
}
export default CardExampleCardProps