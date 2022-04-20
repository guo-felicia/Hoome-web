import React from 'react';

const ThingsToKnow = () => {
    return (
        <div className="row col-3-section">
            <h2 className='banner_title'>Things to Know</h2>
            <div className="wd-column">
                <h3>House rules</h3>
                <ul>
                    <li>Check-in: 3:00 PM - 7:00 PM</li>
                    <li>Checkout: 12:00 PM</li>
                    <li>No smoking</li>
                    <li>No parties or events</li>
                </ul>
            
            </div>
            <div className="wd-column">
                <h3>Health & safety</h3>
                <ul>
                    <li>Committed to Airbnb's enhanced
                        <span>cleaning process.</span>
                    </li>
                    <li>Airbnb's social-distancing and other
                        <span>COVID-19-related guidelines apply</span>
                    </li>
                    <li>Carbon monoxide alarm</li>
                    <li>Smoke alarm</li>
                </ul>
            
            
            </div>
            <div className="wd-column">
                <h3>Cancellation policy</h3>
                <ul>
                    <li>Free cancellation for 48 hours.</li>
                    <li>25% cancellation fee before 2 weeks
                        <span>of move-in date.</span>
                    </li>
                    <li>65% cancellation fee before 1 weeks
                        <span>of move-in date.</span>
                    </li>
                </ul>
            
            </div>
        </div>
    );
};

export default ThingsToKnow;
