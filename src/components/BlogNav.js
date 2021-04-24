import React from 'react';
import './Navbar.css';
import Logo from '../Blogify.PNG';

function BlogNav() {

    return (
        <section className="navbar">
            <div className="logo">    
                <img className="blogify-logo" src={Logo} alt="Blogify Logo"/>
            </div>
            <ul className="nav-list">
                <li>Home</li>
                <li>Write a Blog</li>
                <li>Your Blogs</li>
                <li>Logout</li>
            </ul>
        </section>
    )
}

export default BlogNav;