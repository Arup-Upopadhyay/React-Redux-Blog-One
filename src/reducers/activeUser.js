import {USER_SELECTED} from '../actions/actionList';

export default (state = null ,action) => {
    switch (action.type) {
        case USER_SELECTED:
            return action.payload;
        default :
            return state;
    }
}
