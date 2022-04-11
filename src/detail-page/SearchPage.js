import React from "react";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import houseReducer from "../reducers/house-reducer";
import SearchList from "./SearchList";

// combine reducers into single reducer
const reducer = combineReducers({
    houses: houseReducer
});

const store = createStore(reducer);

const SearchPage = () => {
    return (
        <Provider store={store}>
            <SearchList/>
        </Provider>
    );
};
export default SearchPage;
