import React, {useEffect, useState} from 'react';
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {useDispatch, useSelector} from "react-redux";
import {addFavorites, findAllFavorites} from "../../actions/Favorites-actions";
import Card from "../home/Card";
import {useProfile} from "../../ProfileProvider";
import {useNavigate} from "react-router-dom";

const HouseDetail = ({house}) => {
    const [favorites, setFavorites] = useState([]);
    const {profile} = useProfile();
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    useEffect(() =>
        findAllFavorites(dispatch));
    
    const addFavoritesHandler =(house)=>{
        if (profile) {
            const newFavoritesList = [...favorites, house];
            setFavorites(newFavoritesList);
            addFavorites(dispatch,favorites, profile.username)
        }
        else {
            alert('you havent login yet!')
            navigate('/login')
        }
    }
    
    return (
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
                {/*Favorites Button*/}
                <div className="heart heart_text" onClick={() => addFavoritesHandler(house)}>
                    <FavoriteBorderIcon/>
                    <p className="padding-favorite">favorite</p>
                </div>
            </div>
            
            {/*Main contents*/}
            <div className="row main">
                <div className="info">
                    <h2 className='banner_title'>
                        {house.type} hosted by our friendly host
                    </h2>
                    <img className="avatar" src={house.hostThumbnail} alt="Avatar"/>
                    <p>{"Beds: " + house.beds + "  ·  Bedrooms: " + house.bedrooms + "  ·  Bathrooms: " + house.bathrooms}</p>
                    <p>___</p>
                    <h3 className='banner_title'>Amenities</h3>
                    <ul className="mg-top-0">
                        <li>Wifi</li>
                        <li>A kitchen</li>
                        <li>Self check-in</li>
                        {house.previewAmenities.map((item) =>
                            <li>
                                {item}
                            </li>
                        )}
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
            
        </div>
    );
};

export default HouseDetail;
