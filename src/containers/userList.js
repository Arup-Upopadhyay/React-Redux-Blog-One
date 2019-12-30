import React , {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userSelected , fetchUserList} from '../actions';

class UserList extends Component {
    componentDidMount () {
        this.props.fetchUserList();
    }
    render() {
        const renderList = ( {userList ,userSelected}) => {
            const style = {
                cursor: 'grabbing'
            }

            return userList.map((user) => {
                return (
                    <li
                        key={user.id}
                        style={style}
                        onClick={() => userSelected(user)}
                    >
                        {user.name}
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
    return bindActionCreators({userSelected , fetchUserList} , dispatch);
};

export default connect(mapStateToProps , matchDispatchToProps)(UserList);
