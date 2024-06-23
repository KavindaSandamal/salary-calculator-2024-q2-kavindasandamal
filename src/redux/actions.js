export const setBasicSalary = (amount) => ({
    type: 'SET_BASIC_SALARY',
    payload: amount,
  });
  
  export const addEarning = (earning) => ({
    type: 'ADD_EARNING',
    payload: earning,
  });
  
  export const deleteEarning = (index) => ({
    type: 'DELETE_EARNING',
    payload: index,
  });
  
  
  export const resetState = () => ({
    type: 'RESET_STATE',
  });
  