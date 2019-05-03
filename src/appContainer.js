import React from 'react';
import Dataset from './components/dataset'
import EmployeeInDetail from './components/employeeInDetail'
import {Loader,Grid} from 'semantic-ui-react';
import Header from './components/header'
import {getEmployeeList} from './actions/employeeAction';
import { connect } from 'react-redux';
import './App.css'

class AppContainer extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(getEmployeeList());
  }
  
  render() {

    const { error, isLoading, employeeList} = this.props;

    if (error) {
        return <div> Error: {error} </div>;
    } else if (isLoading) {
        return <Loader size="large" indeterminate active />
      }
    else {
      return (
          <Grid celled='internally'>

            <Grid.Row>
              <Header/>
            </Grid.Row>
        
            <Grid.Row>
              <Grid.Column width={5} style={{ height : '90vh'}}>
                <Dataset  data = {employeeList} />  
              </Grid.Column> 
              <Grid.Column width={11}>
                <EmployeeInDetail />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        );
    }
 
  }

}

const mapStateToProps = (state, props) => {
  return {
    employeeList: state.employeeReducer.employeeList,
    error:  state.employeeReducer.error,
    isLoading: state.employeeReducer.isLoading
  };
};

export default connect(mapStateToProps)(AppContainer);