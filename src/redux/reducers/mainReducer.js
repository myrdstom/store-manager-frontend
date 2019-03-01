import { combineReducers } from 'redux';

const InitialState = {
  start: false
};

function startReducer(state = InitialState) {
  return state;
}

const rootReducer = combineReducers({
  start: startReducer
});

export default rootReducer;
