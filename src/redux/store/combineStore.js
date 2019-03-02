import { createStore, applyMiddleware } from 'redux';
import mainReducer from '../reducers/mainReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
