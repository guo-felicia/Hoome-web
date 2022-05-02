import * as React from 'react';
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import FavoritesCard from './FavoritesCard'
import '../../style/Favorites.css';
import {useNavigate} from "react-router-dom";
import {useProfile} from "../../ProfileProvider";
import {findFavoritesByUser} from "../../services/Favorites-service";
import * as service from "../../services/Favorites-service";



const EmptyFavorites = () => {
    return (
        <Box sx={{m: 5}}>
            <Box sx={{fontSize: 'h3.fontSize'}}>Favorites List</Box>
            <br/>
            <br/>
            <Box sx={{fontSize: 'h5.fontSize', color: 'yellowgreen'}}>The Favorites List is now Empty</Box>
            <br/>
            <Box sx={{fontSize: 'h5.fontSize'}}>Go and Find your First Favorite!</Box>
        </Box>
    )
}


export default function Favorites() {
    
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    const {profile} = useProfile();

    const getFavorites = async () => {
        const favors = await service.findFavoritesByUser(profile.username);
        setFavorites(favors)
    }
    useEffect(() => {
        if (profile) {
            getFavorites()
        }
    }, [])
    
    // const getFavoritesList = async () => {
    //     const url = "http://localhost:4000/api/favorites";
    //     const response = await fetch(url);
    //     const responseJson = await response.json();
    //
    //     console.log(responseJson);
    //     setFavorites(responseJson);
    // }
    
    // useEffect(() => {
    //     getFavoritesList();
    //     return () => {
    //         setFavorites({}); // This worked for me
    //     };
    // }, []);
    
    
    // HD here. Just the initial no data page.
    return (
        <>
            <Box sx={{ fontSize: 'h3.fontSize'}}>My Favorites</Box>
            <br/>
            <div className="games-scroll">
                {/*<EmptyFavorites/>*/}
                {
                    favorites.map && favorites.map(favorite =>
                        <button className='unset_button'
                                onClick={(e) => {
                                    e.stopPropagation();
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