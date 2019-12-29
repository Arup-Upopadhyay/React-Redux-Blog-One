import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userSelected} from '../actions';

class UserList extends Component {

    render() {
        const renderList = ( {userList ,userSelected}) => {
            return userList.map((user) => {
                return (
                    <li
                        key={user.id}
                        onClick={() => userSelected(user)}
                    >
                        {user.first} {user.last}
                    </li>
                );
            });
        }

        return (
            <ul>
                {renderList(this.props)}
            </ul>
        );
    } 
};

const mapStateToProps = (state) => {
    return {
        userList : state.userList
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({userSelected} , dispatch);
};

export default connect(mapStateToProps , matchDispatchToProps)(UserList);
