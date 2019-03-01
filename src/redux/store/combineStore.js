import { createStore } from 'redux';
import rootReducer from '../reducers/mainReducer';

const store = createStore(rootReducer);

export default store;
