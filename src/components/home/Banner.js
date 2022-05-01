import React from 'react'
import '../../style/Banner.css'
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Banner() {
    const history = useNavigate();
    
    return (
        <div className='banner'>
            <div className='banner__search'>
                <p className='news'>Help house 100,000 refugees fleeing Ukraine!!!!</p>
            </div>
            <div className='banner__info'>
                <h2 className="pd-left-0">A home for you during pandemic</h2>
                <h5>
                    Find a warm space for you. Whenever, and wherever you are.
                </h5>
                <Button onClick={() => history('/explore')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner