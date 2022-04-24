import React from 'react';
import {useLocation} from "react-router-dom";
import '../../style/DetailPage.css'
import ThingsToKnow from "./ThingsToKnow";
import Reviews from "./Reviews";
import Questions from "./Questions";
import {combineReducers, createStore} from "redux";
import houseReducer from "../../reducers/House-reducer";
import questionReducer from "../../reducers/Question-reducer";
import {Provider} from "react-redux";
import HouseDetail from "./HouseDetail";

const SearchDetail = () => {
    const location = useLocation();
    const house = location.state.house;
    const rootReducer = combineReducers({
        houses: houseReducer,
        questions: questionReducer
    });
    const store = createStore(rootReducer);
    
    return (
        <Provider store={store}>
            <div className='detail'>
                <HouseDetail house={house}/>
                {/*Reviews*/}
                <h2>Reviews</h2>
                <Reviews/>
                {/*Questions*/}
                <h2>Frequently Ask</h2>
                <Questions/>
                {/*Things to Know*/}
                <h2>Things to Know</h2>
                <ThingsToKnow/>
            </div>
        </Provider>);
};

export default SearchDetail;
