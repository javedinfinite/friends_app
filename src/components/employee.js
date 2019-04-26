import React from 'react';

const Employee = (props) =>{
    console.log(props)
    return(
    <p>{props.details}</p>
    )
}

export default Employee