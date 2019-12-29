import React from 'react';
import UserList from '../containers/userList';
import ActiveUser from '../containers/activeUser';
import './App.css';

const App = () => {
    return (
        <div>
            <UserList />
            <ActiveUser />
        </div>
    );
}

export default App;
