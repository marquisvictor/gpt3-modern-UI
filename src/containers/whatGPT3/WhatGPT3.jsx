import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
    const header1 = 'What is GPT-3';
    const body1 =
        'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.';

    const header2 = 'Chatbots';
    const body2 =
        'We so opinion friends me message as delight. Whole front do of plate heard oh ought. ';

    const header3 = 'Knowledgebase';
    const body3 =
        'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b';

    const header4 = 'Education';
    const body4 =
        'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b';

    return (
        <div className='whatgpt' id='wgpt3'>
            <Feature header={header1} text={body1} styledisplay='no-line' />

            <div className='whatgpt__text-container'>
                <h1 className='whatgpt__bold-text'>
                    The possibilities are beyond your imagination
                </h1>
                <p className='whatgpt__text-colored'>Explore the Library</p>
            </div>
            <div className='whatgpt__feature-container'>
                <Feature
                    header={header2}
                    text={body2}
                    styledisplay='display__column'
                />
                <Feature
                    header={header3}
                    text={body3}
                    styledisplay='display__column'
                />
                <Feature
                    header={header4}
                    text={body4}
                    styledisplay='display__column'
                />
            </div>
        </div>
    );
};

export default WhatGPT3;
