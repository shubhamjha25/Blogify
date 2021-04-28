import React from 'react';
import './Navbar.css';
import Logo from '../Blogify.PNG';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <section className="navbar">
            <div className="logo">    
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><img className="blogify-logo" src={Logo} alt="Blogify Logo"/></Link>
            </div>
            <ul className="nav-list">
                <li><Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
                <li><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link></li>
                <li><Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>Register</Link></li> 
            </ul>
        </section>
    )
}

export default Navbar;