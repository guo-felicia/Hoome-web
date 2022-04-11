import * as service from '../services/house-service';

export const FIND_ALL_HOUSE = 'FIND_ALL_HOUSE';



export const findAllResults = async (dispatch) => {
    const houses = await service.findAllResults();
    dispatch({
        type: FIND_ALL_HOUSE,
        houses
    });
}
