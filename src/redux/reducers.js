const initialState = {
    basicSalary: 0,
    earnings: [],
    deductions: [],
    sumEpf: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_BASIC_SALARY':
        return { ...state, basicSalary: action.payload };
  
      case 'ADD_EARNING':
        return { ...state, earnings: [...state.earnings, action.payload] };
  
      case 'DELETE_EARNING':
        return {
          ...state,
          earnings: state.earnings.filter((_, index) => index !== action.payload),
        };
  

  
      case 'RESET_STATE':
        return initialState;
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  