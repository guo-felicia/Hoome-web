import * as service from '../services/Favorites-service';

export const FIND_ALL_FAVORITES = 'FIND_ALL_FAVORITES';
export const DELETE_FAVORITES = 'DELETE_FAVORITE';
export const ADD_FAVORITES = 'ADD_FAVORITE';


export const findAllFavorites = async (dispatch) => {
    const favorites = await service.findAllFavorites();
    dispatch({
        type: FIND_ALL_FAVORITES,
        favorites: favorites
    });
}

export const deleteFavorites = async (dispatch, data) => {
    const response = await service.deleteFavorites(data);
    dispatch({
        type: DELETE_FAVORITES,
        favorites: data
    })
}

export const addFavorites = async (dispatch, data) => {
    const newFavorite = await service.addFavorites(data);
    dispatch({
        type: ADD_FAVORITES,
        newFavorite: newFavorite
    });
}


