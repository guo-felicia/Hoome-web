import React from 'react';
import './style/Home.css';
import Banner from './Banner'
import Card from './Card'
import Card1 from './img/card1.png';
import Card2 from './img/card2.png';
import Card3 from './img/card3.png';

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner/>

            <div className='home__section'>
                <Card></Card>
                <div className="card size">
                    <img src={Card1} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Online Experiences</h5>
                        <p className="card-text">Unique activities we can do together, led by a world of hosts.</p>
                        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
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
                {/*<Card className='card-img-top'*/}
                {/*      src={Card1}*/}
                {/*      title="Online Experiences"*/}
                {/*      description="Unique activities we can do together, led by a world of hosts."*/}
                {/*/>*/}
                {/*<Card className='card-img-top'*/}
                {/*    src={Card2}*/}
                {/*    title="Unique stays"*/}
                {/*    description="Spaces that are more than just a place to sleep."*/}
                {/*/>*/}
                {/*<Card className='card-img-top'*/}
                {/*    src={Card3}*/}
                {/*    title="Find Rommie"*/}
                {/*    description="Comfortable friendly places, with room for friends."*/}
                {/*/>*/}
            </div>
            {/*<div className='home__section'>*/}
            {/*    <Card*/}
            {/*        src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"*/}
            {/*        title="3 Bedroom Flat in Bournemouth"*/}
            {/*        description="Superhost with a stunning view of the beachside in Sunny Bournemouth"*/}
            {/*        price="£130/night"*/}
            {/*    />*/}
            {/*    <Card*/}
            {/*        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"*/}
            {/*        title="Penthouse in London"*/}
            {/*        description="Enjoy the amazing sights of London with this stunning penthouse"*/}
            {/*        price="£350/night"*/}
            {/*    />*/}
            {/*    <Card*/}
            {/*        src="https://media.nomadicmatt.com/2018/apartment.jpg"*/}
            {/*        title="1 Bedroom apartment"*/}
            {/*        description="Superhost with great amenities and a fabolous shopping complex nearby"*/}
            {/*        price="£70/night"*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    )
}

export default Home