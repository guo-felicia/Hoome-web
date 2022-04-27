export const initialState = {
    term: null,
};

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';


const houseReducer = (state = [], action) => {
    switch (action.type) {
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