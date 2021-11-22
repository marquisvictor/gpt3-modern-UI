import React from 'react';
import './feature.css';

const Feature = ({ header, text }) => {
    return (
        <>
            <div className='line'></div>
            <div className='feature__container'>
                <h3 className='feature__header'>{header}</h3>
                <p className='feature__text'>{text}</p>
            </div>
        </>
    );
};

export default Feature;
