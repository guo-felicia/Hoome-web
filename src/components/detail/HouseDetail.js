import React, {useEffect, useState} from 'react';
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {useDispatch} from "react-redux";
import {addFavorites, findAllFavorites} from "../../actions/Favorites-actions";

const HouseDetail = ({house}) => {
    const [favorites] = useState([]);
    
    const dispatch = useDispatch();
    useEffect(() =>
        findAllFavorites(dispatch));
    
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
                <div className="heart" onClick={() => addFavorites(dispatch, [...favorites, house])}>
                    <FavoriteBorderIcon/>
                    <p className='heart_text'>save</p>
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
                <div className='image-block'>
                    {house.images.map((image) => <div className='column'>
                        <img className='img' src={image} alt=""/>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default HouseDetail;
