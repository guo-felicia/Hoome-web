import React from 'react';
import '../../style/Home.css';
import Banner from './Banner'
import Card1 from '../../img/card1.png';
import Card2 from '../../img/card2.png';
import Card3 from '../../img/card3.png';
import Favorites from "../profile/Favorites";

function Home() {
    return (
        <div className='home'>
            <Banner/>
            {/*TODO ADD CHECK: only display when log-in*/}
            <h2>My Favorites</h2>
            <div className="favorite-box">
                <Favorites/>
            </div>
            
            <div className='home__section'>
                {/*<Card></Card>*/}
                <div className="card size">
                    <img src={Card1} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Online Experiences</h5>
                        <p className="card-text">Unique activities we can do together, led by a world of hosts.</p>
                    </div>
                </div>
                <div className="card size">
                    <img src={Card2} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Unique stays</h5>
                        <p className="card-text">Spaces that are more than just a place to sleep.</p>
                    </div>
                </div>
                <div className="card size">
                    <img src={Card3} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Find Rommie</h5>
                        <p className="card-text">Comfortable friendly places, with room for friends.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home