import {combineReducers} from 'redux';
import activeUser from './activeUser';
import userList from './userList';

const allReducers = combineReducers({
    activeUser,
    userList
});

export default allReducers;
