import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import search from './search.reducer';

const rootReducer = combineReducers({ search });

export default createStore(rootReducer, applyMiddleware(thunk, logger));