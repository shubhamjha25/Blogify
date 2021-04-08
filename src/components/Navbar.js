import React from 'react';
import './Navbar.css';
import Logo from '../Blogify.PNG';

function Navbar() {

    return (
        <section className="navbar">
            <div className="logo">    
                <img className="blogify-logo" src={Logo} alt="Blogify Logo"/>
            </div>
            <ul className="nav-list">
                <li>About</li>
                <li>Login</li>
                <li>Register</li>
                <li>Contact</li>
            </ul>
        </section>
    )
}

export default Navbar;