    
import { combineReducers } from 'redux';
import loginReducer from './loginReducer/loginReducer'

const InitialState = {
  start: false
};


const mainReducer = combineReducers({
  loginReducer
});

export default mainReducer;
