import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import profileReducer from './profileReducer';

const reducers = {
  profile: profileReducer,
};

// @ts-ignore
const store = applyMiddleware(thunk)(createStore)(combineReducers(reducers));
export default store;
