import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';

const Possibility = () => {
    return (
        <div id='possibility' className='possibility__wrapper'>
            <div className='possibility__image-container'>
                <img
                    src={possibility}
                    className='possibility__image'
                    alt='posibility'
                />
            </div>
            <div className='possibility__text'>
                <h2>The possibilities are beyond your imagination</h2>
                <p className='possibility__info'>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <p className='possibility__info--colored'>
                    Request Early Access to Get Started
                </p>
            </div>
        </div>
    );
};

export default Possibility;
