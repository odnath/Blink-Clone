import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='logo'>
                <h1>blink</h1>
            </div>
            <div className='nav-right'>
                <nav className='nav-links'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
                <div className='social-links'>
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTiktok />
                    <FaYoutube />
                </div>
                <div className='nav-button'>
                    <button>Shop now</button>
                </div>
            </div>
        </div>
    )
}

export default Nav
