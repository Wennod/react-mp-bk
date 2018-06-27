import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import QueryPageReducer from './QueryPage.reducer';

const rootReducer = combineReducers(QueryPageReducer);

export default createStore(rootReducer, applyMiddleware(thunk, logger));