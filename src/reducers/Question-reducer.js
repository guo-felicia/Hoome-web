import {CREATE, DELETE, FIND_ALL, UPDATE} from "../actions/Question-actions";


const questionReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL:
            return action.questions;
        case DELETE:
            return state.filter(
                question => question._id !== action.question._id);
        case CREATE:
            return [
                ...state,
                action.newQuestion
            ];
        case UPDATE:
            return state.map(
                question => question._id === action.question._id ?
                    action.question : question);
        default:
            return state;
    }
}

export default questionReducer;