import React from 'react';
import DATA from '../data';

const ListOfEmployee = (props) => (
    <p>{props.selectedEmployee}</p>
    // DATA.map((item)=>(
    //     <p>{item.id} {item.first_name} {item.last_name} {item.gender} {item.email}</p>
    // ))
);
export default ListOfEmployee;