import React from 'react';
import { atlassian, slack, google, shopify, dropbox } from './imports';
import './brand.css';

const Brand = () => {
    return (
        <div className='brand-wrapper'>
            <div className='brand'>
                <img src={google} alt='google' />
            </div>
            <div className='brand'>
                <img src={slack} alt='slack' />
            </div>
            <div className='brand'>
                <img src={atlassian} alt='atlassian' />
            </div>
            <div className='brand'>
                <img src={dropbox} alt='dropbox' />
            </div>
            <div className='brand'>
                <img src={shopify} alt='shopify' />
            </div>
        </div>
    );
};

export default Brand;
