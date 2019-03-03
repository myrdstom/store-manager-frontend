    
import { combineReducers } from 'redux';
import loginReducer from './loginReducer/loginReducer'
import signupReducer from './signupReducer/signupReducer'

const InitialState = {
  start: false
};


const mainReducer = combineReducers({
  loginReducer,
  signupReducer
});

export default mainReducer;
