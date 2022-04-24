import {ADD_FAVORITES, DELETE_FAVORITES, FIND_ALL_FAVORITES} from "../actions/Favorites-actions";


const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_FAVORITES:
            return action.favorites;
        case DELETE_FAVORITES:
            return state.filter(
                question => question._id !== action.favorites._id);
        case ADD_FAVORITES:
            return [
                ...state,
                action.newFavorite
            ];
        default:
            return state;
    }
}

export default favoriteReducer;