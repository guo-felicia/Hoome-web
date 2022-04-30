
export const initialState = {
    term: null,
};

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const ADD_HOUSE = 'ADD_HOUSE';


const houseReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_HOUSE:
            return [
                ...state,
                action.newHouse
            ];
        case SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
        default:
            return state;
    }
}

export default houseReducer;