import React, {useEffect, useState} from 'react';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const HouseList = () => {
    const [endPoint] = useState('');
    const [container, setContainer] = useState([]);
    
    const fetch = require('node-fetch');
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=+${endPoint}&checkin=2022-05-16&checkout=2022-05-17&adults=1&page=2`;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
            'X-RapidAPI-Key': '7a2781c7a8msh9bcc2f46e40f15cp13108ejsnd4d34bb1cfc4'
        }
    };
    
    useEffect(() => fetchMe(), [endPoint])
    
    const fetchMe = () => {
        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                setContainer(data.results)
                console.log(data.results)
            })
            .catch(err => console.error('error:' + err));
    }
    
    return (
        <div>
            <h1 className='font'>Explore houses with us</h1>
            {
                container.map((house) =>
                    <a href={`/results/detail/${house.id}`}>
                        <div className='searchResult'>
                            <img src={house.images[0]} alt=""/>
                            <FavoriteBorderIcon className="searchResult__heart"/>
                            
                            <div className='searchResult__info'>
                                <div className="searchResult__infoTop">
                                    <p>{house.address}</p>
                                    <h3>{house.name}</h3>
                                    <p>____</p>
                                    <p>{"Beds: " + house.beds + " Bedrooms: " + house.bedrooms + " Bathrooms: " + house.bathrooms}</p>
                                </div>
                                
                                <div className="searchResult__infoBottom">
                                    <div className="searchResult__stars">
                                        <StarIcon className="searchResult__star"/>
                                        <p>
                                            <strong>{house.rating}</strong>
                                        </p>
                                    </div>
                                    <div className='searchResults__price'>
                                        <h3>{house.price.currency + " " + house.price.total + " /night"}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                )}
        </div>
    );
};

export default HouseList;
