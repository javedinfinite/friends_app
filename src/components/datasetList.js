import React from 'react';
import SingleEmployeeView from './singleEmployeeView'

class DatasetList extends React.Component {
    render() {

        return ( 
            this.props.data.map( (item) => (
                <SingleEmployeeView
                    item ={item}
                    getOnclickEvent = {this.props.getOnclickEvent}
                    key = {'key'+item.id}
                    
                />
             ))
        );
    }
}
export default DatasetList;