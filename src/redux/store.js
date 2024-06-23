import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <SalaryCalculator />
  </Provider>
);

export default App;
