import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
    const data = {
        header1: 'What is GPT-3',
        body1: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',

        header2: 'Chatbots',
        body2: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',

        header3: 'Knowledgebase',
        body3: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',

        header4: 'Education',
        body4: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
    };

    return (
        <div className='whatgpt' id='wgpt3'>
            <Feature header={data.header1} text={data.body1} />

            <div className='whatgpt__text-container'>
                <h1 className='whatgpt__bold-text'>
                    The possibilities are beyond your imagination
                </h1>
                <p className='whatgpt__text-colored'>Explore the Library</p>
            </div>
            <div className='whatgpt__feature-container'>
                <Feature
                    header={data.header2}
                    text={data.body2}
                    styledisplay='display__column'
                />
                <Feature
                    header={data.header3}
                    text={data.body3}
                    styledisplay='display__column'
                />
                <Feature
                    header={data.header4}
                    text={data.body4}
                    styledisplay='display__column'
                />
            </div>
        </div>
    );
};

export default WhatGPT3;
