const initialState = {
    basicSalary: 0,
    earnings: [],
    deductions: [],
  };
  
  const salaryReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_SALARY':
        return {
          ...state,
          basicSalary: action.payload,
        };
      // Add more cases as needed
      default:
        return state;
    }
  };
  
  export default salaryReducer;
  