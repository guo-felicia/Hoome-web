import {FIND_ALL_HOUSE}
    from "../actions/house-actions";

const houseReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_HOUSE:
            return action.houses;
        default:
            return state;
    }
}

export default houseReducer;
