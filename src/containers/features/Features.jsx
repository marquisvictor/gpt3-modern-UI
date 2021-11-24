import React from 'react';
import { Feature } from '../../components';
import './features.css';

const data = [
    {
        title: 'Improving end distrusts instantly',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Become the tended active',
        text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
        title: 'Message or am nothing',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
        title: 'Really boy law county',
        text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
];

const Features = () => {
    return (
        <div className='features__wrapper'>
            <div className='features__text'>
                <h2>
                    The Future is Now and You Just Need To Realize It. Step into
                    Future Today & Make it Happen.
                </h2>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='features-component'>
                {data.map((featureData, id) => (
                    <div className='feature-component__wrapper'>
                        <Feature
                            header={featureData.title}
                            text={featureData.text}
                            key={id}
                            // styleline='no-line'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
