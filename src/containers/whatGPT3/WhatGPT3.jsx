import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
    const header1 = 'What is GPT-3';
    const body1 =
        'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.';

    return (
        <div className='whatgpt'>
            <Feature header={header1} text={body1} />
            <div className='whatgpt__text-container'>
                <h2 className='whatgpt__bold-text'>
                    The possibilitites are beyond your imagination
                </h2>
                <p className='whatgpt__text--colored'>Explore the Library</p>
            </div>
            <Feature />
            <Feature />
            <Feature />
        </div>
    );
};

export default WhatGPT3;
