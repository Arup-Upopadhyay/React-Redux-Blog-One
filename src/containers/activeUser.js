import React  from 'react';
import {connect} from  'react-redux';

const ActiveUser = (props) => {
    if(!props.activeUser) {
        return(
            <div>Please select a user!!</div>
        )
    }
    else{
        return(
            <div>
                `you clicked on {props.activeUser.first} {props.activeUser.last}`
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        activeUser : state.activeUser
    }
};

export default connect(mapStateToProps)(ActiveUser);
