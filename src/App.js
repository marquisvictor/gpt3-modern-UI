import React, { useState, useEffect } from 'react';
import {
    Footer,
    Blog,
    Possibility,
    Features,
    Header,
    WhatGPT3,
} from './containers';
import { CTA, Brand, Navbar } from './components';
import axios from 'axios';
import './App.css';

function App() {
    return (
        <div className='app'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <footer />
        </div>
    );
}

export default App;
