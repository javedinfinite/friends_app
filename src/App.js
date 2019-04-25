import React from 'react';
import PaginationComponent from './components/pagination';
import DATA from './data';
import ListOfEmployee from './components/list';
import SearchBar from './components/searchbar';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedemployee: {"id":5,"first_name":"Elton","last_name":"Marco","email":"emarco4@google.ca","gender":"Male","ip_address":"121.148.119.141"}
  };
  this.employees=[{"id":1,"first_name":"Charla","last_name":"Tohill","email":"ctohill0@google.nl","gender":"Female","ip_address":"3.92.152.151"},
      {"id":2,"first_name":"Mill","last_name":"Westover","email":"mwestover1@spiegel.de","gender":"Male","ip_address":"116.19.47.203"},
      {"id":3,"first_name":"Loise","last_name":"Crudgington","email":"lcrudgington2@nps.gov","gender":"Female","ip_address":"101.180.21.160"},
      {"id":4,"first_name":"Lavinia","last_name":"Werlock","email":"lwerlock3@ocn.ne.jp","gender":"Female","ip_address":"248.183.195.184"},
      {"id":5,"first_name":"Elton","last_name":"Marco","email":"emarco4@google.ca","gender":"Male","ip_address":"121.148.119.141"}];
  }
employeeSearch = (term) => {
  let employee={}
   // console.log(employees);
   console.log('this',this)
   console.log(this.employees);
   //console.log(this.employees.length)
    for(let i=0;i<this.employees.length;i++){
      console.log('employees id',typeof(this.employees[i].id))
      console.log('entered term',typeof(term))
      if(this.employees[i].id === parseInt(term)){
      employee=this.employees[i];
      console.log('entered')
      break;
      }
    }
    this.setState({
        selectedemployee:employee
    });
    console.log('selectedemployee',employee)
}
  render() { 
    return ( 
      <React.Fragment>
      <SearchBar onSearchTermChange={this.employeeSearch}/>
      <ListOfEmployee selectedEmployee = {this.state.selectedemployee.first_name}/>
        <PaginationComponent />
      </React.Fragment>
     );
  }
}
 
export default App;