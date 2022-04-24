import React from 'react';
import {useLocation} from "react-router-dom";
import '../../style/DetailPage.css'
import ThingsToKnow from "./ThingsToKnow";
import Questions from "./Questions";
import {combineReducers, createStore} from "redux";
import houseReducer from "../../reducers/House-reducer";
import questionReducer from "../../reducers/Question-reducer";
import {Provider} from "react-redux";
import HouseDetail from "./HouseDetail";
import favoriteReducer from "../../reducers/Favorite-reducer";

const SearchDetail = () => {
    const location = useLocation();
    const house = location.state.house;
    const rootReducer = combineReducers({
        houses: houseReducer,
        questions: questionReducer,
        favorites: favoriteReducer
    });
    const store = createStore(rootReducer);
    
    return (
        <Provider store={store}>
            <div className='detail'>
                <HouseDetail house={house}/>
                {/*Questions*/}
                <h2 className="padding-top-20">Frequently Ask</h2>
                <Questions/>
                {/*Things to Know*/}
                <h2>Things to Know</h2>
                <ThingsToKnow/>
            </div>
        </Provider>);
};

export default SearchDetail;
