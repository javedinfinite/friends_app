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
      case Actions.EMPLOYEE_REQUESTED:
      return {
        ...state,
        error: action.error || '',
        selectedEmployee:   {},
        isLoading: false,
      };
      case Actions.EMPLOYEE_RECEIVED:
      return {
        ...state,
        error:  '',
        selectedEmployee: action.payload.employeeDetails || {},
        isLoading: false,
      };
      case Actions.EMPLOYEE_ERROR:
      return {
        ...state,
        error: action.error || 'Something went wrong while fetching employee data',
        isLoading: false,
      };
    default:
      return state;
  }
};