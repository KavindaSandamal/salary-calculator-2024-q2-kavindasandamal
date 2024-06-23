import { createStore, combineReducers } from 'redux';
import salaryReducer from './reducers';

const rootReducer = combineReducers({
  salary: salaryReducer,
});

const store = createStore(rootReducer);

export default store;
