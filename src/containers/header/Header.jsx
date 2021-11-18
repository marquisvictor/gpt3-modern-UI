import React from 'react';
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
            </div>

            <div className='header-right'>image</div>
        </div>
    );
};

export default Header;
