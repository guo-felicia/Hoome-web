import {CREATE, DELETE, FIND_ALL, UPDATE} from "../actions/Question-actions";


const questionReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL:
            return action.tuits;
        case DELETE:
            return state.filter(
                question => question._id !== action.tuit._id);
        case CREATE:
            return [
                ...state,
                action.newTuit
            ];
        case UPDATE:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);
        default:
            return state;
    }
}

export default questionReducer;