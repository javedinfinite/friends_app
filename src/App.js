import React from 'react';
import Dataset from './components/dataset'
import SearchBar from './components/searchbar';
import axios from 'axios';

class App extends React.Component {

  state = {
    error: null,
    isLoaded: true,
    employee_data: []
  }
 
   componentDidMount() {
      axios.get('http://localhost:3001/').then( response => {
      this.setState({ 
        isLoaded: false, 
        employee_data : response.data.EmployeeDetails 
      });
    })
    .catch(function (error) {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render()
  { 
    const { error, isLoaded, employee_data} = this.state;

    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (isLoaded) {
      return <div> Loading... </div>;
    }
    else{
      return ( 
        <React.Fragment>
          <Dataset  data = {employee_data}/>   
        </React.Fragment>
      )
    }
  }
}
 
export default App;