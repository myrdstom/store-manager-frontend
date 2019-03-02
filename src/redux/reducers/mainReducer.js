    
import { combineReducers } from 'redux';

const InitialState = {
  start: false
};

function startReducer(state = InitialState) {
  return state;
}

const mainReducer = combineReducers({
  start: startReducer
});

export default mainReducer;
