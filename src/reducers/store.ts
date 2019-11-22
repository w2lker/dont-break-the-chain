import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import profileReducer from './profileReducer';

const reducers = {
  profile: profileReducer,
};

const store = applyMiddleware(thunk)(createStore)(combineReducers(reducers));
export default store;
