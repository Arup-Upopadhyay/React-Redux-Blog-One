import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(allReducers , applyMiddleware(thunk , logger));

export default store;
