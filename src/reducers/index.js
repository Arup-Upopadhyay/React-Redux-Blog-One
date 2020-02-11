import {combineReducers} from 'redux';
import activeUser from './activeUser';
import userList from './userList';

const allReducers = combineReducers({
    activeUser,
    userList
});

console.log('allReducers: ',allReducers);

export default allReducers;
