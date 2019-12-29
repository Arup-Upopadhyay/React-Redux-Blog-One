import {USER_SELECTED} from './actionList';

const _userSelected = (user) => {
    return {
        type: USER_SELECTED,
        payload: user
    };
}; 

export const userSelected = (user) => {
    return (dispatch) => {
        setTimeout(() =>{
            dispatch(_userSelected(user))
        },1000)
    }
}
