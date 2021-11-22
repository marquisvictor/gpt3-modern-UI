import React from 'react';
import './feature.css';

const Feature = ({ header, text, styledisplay, styleline }) => {
    return (
        <>
            <div className={`feature__container ${styledisplay}`}>
                <span className={`line ${styleline}`}></span>
                <h3 className='feature__header'>{header}</h3>
                <p className='feature__text'>{text}</p>
            </div>
        </>
    );
};

export default Feature;
