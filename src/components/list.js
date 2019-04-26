import React from 'react';
import CardExampleCardProps from './list_style'
//const DATA = require('./MOCK_DATA.json');
//import DATA from './data.js'
class SingleEmployee extends React.Component{
    render(){
    return this.props.data.map((item)=>(
        <CardExampleCardProps 
            id = {item.id} 
            first_name={item.first_name} 
            last_name ={item.last_name} 
            email = {item.email} 
            gender = {item.gender} 
            ip_address = {item.ip_address}
        />
    ))
    }
}
export default SingleEmployee;