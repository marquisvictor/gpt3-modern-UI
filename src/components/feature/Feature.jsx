import React from 'react';
import './feature.css';

const Feature = ({ header, text, styledisplay }) => {
    return (
        <div className={`feature__container ${styledisplay}`}>
            <div className='feature__header'>
                <div className='line'></div>
                {header}
            </div>
            <p className='feature__text'>{text}</p>
        </div>
    );
};

export default Feature;
