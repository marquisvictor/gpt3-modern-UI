import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
    return (
        <div className='header-wrapper' id='home'>
            <div className='header__left'>
                <h1 className='header__text-gradient'>
                    Let's Build Something Amazing with GPT-3 OpenAI
                </h1>
                <p className='header__text-detail'>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <div className='header__input-button'>
                    <input type='text' placeholder='Your Email Address' />
                    <button type='button'>
                        <p className='header__font'>Get Started</p>
                    </button>
                </div>
                <div className='header__people'>
                    <img src={people} alt='people' />
                    <p>
                        1,600 people requested access a visit in last 24 hours
                    </p>
                </div>
            </div>
            <div className='header__img-container'>
                <img
                    className='header__img'
                    src={ai}
                    alt='Artificial intelligence'
                />
            </div>
        </div>
    );
};

export default Header;
