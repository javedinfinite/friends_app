import Actions from  '../actionConstants/employeeActionConstants'

const initialState = {
  employeeList: [],
  isLoading: false,
  selectedEmployee: {},
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.EMPLOYEES_REQUESTED:
      return {
        ...state,
        error: '',
        employeeList: [],
        isLoading: true,
      };
      case Actions.EMPLOYEES_RECEIVED:
      return {
        ...state,
        error: '',
        employeeList: action.payload.employeeList || [],
        selectedEmployee: action.payload.employeeList[0] || {},
        isLoading: false,
      };
      case Actions.EMPLOYEES_ERROR:
      return {
        ...state,
        error: action.error || 'Something went wrong while fetching employees list',
        isLoading: false,
      };
      case Actions.SET_EMPLOYEE_REQUESTED:
      return {
        ...state,
        error: action.error || 'Something went wrong while fetching employees list',
        selectedEmployee: action.payload.employeeList[0] || {},
        isLoading: false,
      };
    default:
      return state;
  }
};