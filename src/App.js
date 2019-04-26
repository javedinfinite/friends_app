import React from 'react';
import PaginationComponent from './components/pagination';
import SearchBar from './components/searchbar';
import Employee from './components/employee';
import DATA from './data.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedemployee:[{"id":0,"first_name":"","last_name":"","email":"ctohill0@google.nl","gender":"Female","ip_address":"3.92.152.151"}]
  }
}

employeeSearch = (term) => {
  let employee={}
   // console.log(employees);
   console.log('this',this)
   console.log(DATA);
   //console.log(this.employees.length)
    for(let i=0;i<DATA.length;i++){
      console.log('employees id',typeof(DATA[i].id))
      console.log('entered term',typeof(term))
      if(DATA[i].id === parseInt(term)){
      employee=DATA[i];
      console.log('entered')
      }
    }
    this.setState({
        selectedemployee:employee
    });
    console.log('selectedemployee',employee)
}

render()
{ 
  //console.log('name',this.state.selectedemployee.first_name);
    return ( 
      <React.Fragment>
        <SearchBar onSearchTermChange={this.employeeSearch} />
        <Employee details={[this.state.selectedemployee.first_name]}/>
        <PaginationComponent  data = {DATA}/>   
      </React.Fragment>
     )
}
}
 
export default App;