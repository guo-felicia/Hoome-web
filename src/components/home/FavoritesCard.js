import React, {useEffect} from 'react';
import '../../style/Favorites.css'
import StarIcon from "@material-ui/icons/Star";
import {useDispatch} from "react-redux";
import {deleteFavorites, findAllFavorites} from "../../actions/Favorites-actions";

function FavoritesCard({favorites, src, title, description, price}) {
    const dispatch = useDispatch();
    useEffect(() =>
        findAllFavorites(dispatch));
    
    return (
        <div className='f-card'>
            <img src={src} alt=""/>
            <div className="f-card__info">
                <h2>{title}
                    <span className="f-rating"><StarIcon className="f-stars"/>
                        {price} </span>
                </h2>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

export default FavoritesCard