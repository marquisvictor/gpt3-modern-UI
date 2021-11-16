import { MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const MenuItems = () => (
        <>
            <p>
                <a href='#home'>Home</a>
            </p>
            <p>
                <a href='#wgpt3'>What is GPT3?</a>
            </p>
            <p>
                <a href='#possibility'>Open AI</a>
            </p>
            <p>
                <a href='#features'>Case Studies</a>
            </p>
            <p>
                <a href='#blog'>Library</a>
            </p>
        </>
    );
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links--logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='gpt3__navbar-links--container'>
                    <MenuItems />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu ? (
                    <RiCloseLine
                        color='#fff'
                        size={27}
                        onClick={() => setToggleMenu(!toggleMenu)}
                    />
                ) : (
                    <RiMenu3Line
                        color='#fff'
                        size={27}
                        onClick={() => setToggleMenu(!toggleMenu)}
                    />
                )}
                {toggleMenu && (
                    <>
                        <div className='gpt3__navbar-menu--container scale-up-center'>
                            <MenuItems />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
