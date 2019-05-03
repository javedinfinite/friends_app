import Actions from '../actionConstants/employeeActionConstants';
import axios from 'axios';

export const getEmployeeList = () => {
  return async (dispatch) => {
    dispatch({type: Actions.EMPLOYEES_REQUESTED});

    try {
      // let response = await axios.get('http://localhost:3001');
      let response = await axios.get('https://datagrokr-employee-server.herokuapp.com');
      dispatch({
        type: Actions.EMPLOYEES_RECEIVED,
        payload: {employeeList: response.data.EmployeeDetails},
      });
    } catch (e) {
      dispatch({
        type: Actions.EMPLOYEES_ERROR,
        error: "API to get employee list is failed with error : "+e,
      });
    }
  };
};
export const getEmployee = (id) => {
  return async (dispatch) => {
    dispatch({type: Actions.EMPLOYEE_REQUESTED});
    try {
      // let response = await axios.get(`http://localhost:3001/${id}`);
      let response = await axios.get(`https://datagrokr-employee-server.herokuapp.com/${id}`);
      dispatch({
        type: Actions.EMPLOYEE_RECEIVED,
        payload: {employeeDetails: response.data},
      });
    } catch (e) {
      dispatch({
        type: Actions.EMPLOYEE_ERROR,
        error: "API to get employee list is failed with error : "+e,
      });
    }
  };
};