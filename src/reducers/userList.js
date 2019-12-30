import {USER_LIST} from '../actions/actionList';
 
export default function (state = [] , action) {
    switch (action.type) {
        case USER_LIST:
            return action.payload;
        default :
            return state;
    }
};
