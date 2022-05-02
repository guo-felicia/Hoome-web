import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import '../../style/DetailPage.css'
import ThingsToKnow from "./ThingsToKnow";
import Questions from "./Questions";
import {combineReducers, createStore} from "redux";
import houseReducer from "../../reducers/House-reducer";
import questionReducer from "../../reducers/Question-reducer";
import {Provider, useDispatch} from "react-redux";
import HouseDetail from "./HouseDetail";
import favoriteReducer from "../../reducers/Favorite-reducer";
import Favorites from "../profile/Favorites";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {deleteFavorites, findAllFavorites} from "../../actions/Favorites-actions";

const FavoritesDetail = () => {
    const location = useLocation();
    const house = location.state.favorite;
    // console.log(house);
    const rootReducer = combineReducers({
        houses: houseReducer,
        questions: questionReducer,
        favorites: favoriteReducer
    });
    const store = createStore(rootReducer);
    const dispatch = useDispatch();
    useEffect(() =>
        findAllFavorites(dispatch));
    
    return (
        <Provider store={store}>
            <div className='detail'>
                <h2 className='bg'>{house.name}</h2>
                {/*TITLE*/}
                <div className="searchResult__stars rating">
                    <StarIcon className="searchResult__star"/>
                    <p>{house.rating}</p>
                    <p className='middle_dot'> · </p>
                    <p>{house.reviewsCount} reviews</p>
                    <p className='middle_dot'> · </p>
                    <p>{house.address}</p>
                    <div className="heart heart_text" onClick={() => deleteFavorites(
                        dispatch, house)}>
                        <i className="fas fa-heart red"></i>
                        <p className="padding-favorite">unfavorite</p>
                    </div>
                </div>
                
                {/*Main contents*/}
                <div className="row main">
                    <div className="info">
                        <h2 className='banner_title'>
                            {house.type} hosted by our friendly host
                        </h2>
                        <p>{"Beds: " + house.beds + "  ·  Bedrooms: " + house.bedrooms + "  ·  Bathrooms: " + house.bathrooms}</p>
                        <p>___</p>
                        <h3 className='banner_title'>Amenities</h3>
                        <ul className="mg-top-0">
                            <li>Wifi</li>
                            <li>A kitchen</li>
                            <li>Self check-in</li>
                        </ul>
                        <h3 className='banner_title'>Keep Safety in Mind</h3>
                        <ul className="mg-top-0">
                            <li>Smoke alarm & Fire extinguisher</li>
                            <li>Emergency plan and local numbers</li>
                        </ul>
                    
                    </div>
                    <div className='image-block mobile games-scroll'>
                        {house.images.map((image) => <div className='column'>
                            <img className='img' src={image} alt=""/>
                        </div>)}
                    </div>
                </div>
                
                {/*<HouseDetail house={house}/>*/}
                <div className="searchDetail-bg">
                    <Questions/>
                    <ThingsToKnow/>
                </div>
            
            </div>
        </Provider>);
};

export default FavoritesDetail;
