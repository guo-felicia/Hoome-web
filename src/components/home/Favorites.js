import * as React from 'react';
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import FavoritesCard from './FavoritesCard'
import '../../style/Favorites.css';
import {useNavigate} from "react-router-dom";


export default function Favorites() {
    
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    const getFavoritesList = async () => {
        const url = "http://localhost:4000/api/favorites";
        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);
        setFavorites(responseJson);
    }
    
    useEffect(() => {
        getFavoritesList();
        return () => {
            setFavorites({}); // This worked for me
        };
    }, []);
    
    
    // HD here. Just the initial no data page.
    return (
        <>
            
            <h2 className="f-title">My Favorites</h2>
            <div className="games-scroll fav-block">
                {
                    favorites.map && favorites.map(favorite =>
                        <button className='unset_button'
                                onClick={() => {
                                    navigate(`/detail/${favorite._id}`, {state: {favorite}})
                                }}>
                            <div className=''>
                                <FavoritesCard
                                    favorites={favorite}
                                    src={favorite.images[0]}
                                    title={favorite.name}
                                    description={"Beds: " + favorite.beds + "  ·  Bedrooms: " + favorite.bedrooms + "  ·  Bathrooms: " + favorite.bathrooms}
                                    price={favorite.rating}
                                />
                            </div>
                        </button>
                    )}
            </div>
        </>
    
    )
}