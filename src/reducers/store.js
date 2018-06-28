import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import query from './QueryPage.reducer';
import search from './Search.reducer';

const rootReducer = combineReducers({ query, search });

export default createStore(rootReducer, applyMiddleware(thunk, logger));