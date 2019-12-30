import React  from 'react';
import {connect} from  'react-redux';

const ActiveUser = (props) => {
    const style = {
        textAlign: 'center'
    }
    if(!props.activeUser) {
        return(
            <div style={style}>Please select a user!!</div>
        )
    }
    else{
        return(
            <div style={style}>
                you clicked on {props.activeUser.name}
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
