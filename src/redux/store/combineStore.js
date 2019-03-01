import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default () =>{
    const store = createStore(combineReducers({}), applyMiddleware(thunk));

    return store;
}
