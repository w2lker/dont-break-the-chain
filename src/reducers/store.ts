import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import habitReducer from './habitReducer';
import profileReducer from './profileReducer';

const reducers = {
  profile: profileReducer,
  habits: habitReducer,
};

// @ts-ignore
const store = applyMiddleware(thunk)(createStore)(combineReducers(reducers));
export default store;
