import React from 'react';
import Dataset from './components/dataset'
import EmployeeInDetail from './components/employeeInDetail'


import {Loader,Grid} from 'semantic-ui-react';
import Header from './components/header'
import './App.css'

import axios from 'axios';

class App extends React.Component {
  state = {
    error: null,
    isLoaded: true,
    employee_data: [],
    selectedEmployee: {},
    random_number : 1

  }
 
   componentDidMount() {
    // https://datagrokr-employee-server.herokuapp.com/
      // axios.get('http://localhost:3001/').then( response => {
        axios.get('https://datagrokr-employee-server.herokuapp.com/').then( response => {
      this.setState({ 
        isLoaded: false, 
        employee_data : response.data.EmployeeDetails ,
        selectedEmployee : response.data.EmployeeDetails[0]
      });
    })
    .catch(function (error) {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  handleOnclick = (data,random_number) => {
   this.setState({ 
    selectedEmployee :  data,
    // random_number : random_number
  });
  }
  
  

  render()
  { 
    const { error, isLoaded, employee_data, selectedEmployee} = this.state;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (isLoaded) {
      return <Loader size="large" indeterminate active />
    }
    else{
      return ( 
        <Grid celled='internally'>

          <Grid.Row>
            <Header/>
          </Grid.Row>
      
          <Grid.Row>
            <Grid.Column width={5} style={{ height : '90vh'}}>
              <Dataset  data = {employee_data}getOnclickEvent = {this.handleOnclick} />  
            </Grid.Column> 
            <Grid.Column width={11}>
              <EmployeeInDetail data = {selectedEmployee}  />
            </Grid.Column>
          </Grid.Row>

        </Grid>
      )
    }
  }
}
 
export default App;