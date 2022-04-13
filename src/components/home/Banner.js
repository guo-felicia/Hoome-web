import React, { useState } from 'react'
import '../../style/Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useNavigate } from "react-router-dom";

function Banner() {
    const history = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    
    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>A home for you during pandemic</h1>
                <h5>
                    Find a warm space for you. Whenever, and wherever you are.
                </h5>
                <Button onClick={() => history('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner