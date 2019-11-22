import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import sampleReducer from './sampleReducer';

const reducers = {
  sample: sampleReducer,
};

const store = applyMiddleware(thunk)(createStore)(combineReducers(reducers));
export default store;
