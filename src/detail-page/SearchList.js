import React, {useEffect} from 'react';
import '../style/SearchPage.css';
import {Button} from "@material-ui/core";
import SearchResult from "./SearchResult";

import {useDispatch, useSelector}
    from "react-redux";
import {findAllResults} from "../actions/house-actions";


function SearchList() {
    const houses = useSelector(
        state => state.houses);
    
    const dispatch = useDispatch();
    useEffect(() =>
            findAllResults(dispatch),
        [dispatch]);
    
    console.log(houses);
    
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            {/*Search Results*/}
            {
                houses.map && houses.map(house =>
                    <SearchResult
                        img={house.img}
                        location={house.location}
                        title={house.title}
                        description={house.description}
                        star={house.star}
                        price={house.price}
                        total={house.total}
                    />
                )
            }
        </div>
    )
}

export default SearchList