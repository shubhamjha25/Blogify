import React from 'react';
import './Navbar.css';
import Logo from '../Blogify.PNG';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';

function Navbar() {

    const logoutSubmit = () => {
        localStorage.clear();
    }

    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token)
        isAuth = true;
    else
        isAuth = false;

    if(isAuth == true)
    {
        var decoded = jwt_decode(token);
        var userEMAIL = decoded.email;
    }

    return (
        <section className="navbar">
            <div className="logo">    
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><img className="blogify-logo" src={Logo} alt="Blogify Logo"/></Link>
            </div>
            <ul className="nav-list">
                {
                    isAuth 
                    ?
                        <>
                            <li className="current-user-info">Signed in as : <strong>{userEMAIL}</strong></li>
                            <li><Link to="/home" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                            <li><Link to="/about" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
                            <li><Link to="/blogs" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>Your Blogs</Link></li>
                            <li><Link to="/create" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>Write a Blog</Link></li>
                            <li className="nav-link" onClick={logoutSubmit}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Logout</Link></li>
                        </> 
                    :
                        <>
                            <li><Link to="/" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                            <li><Link to="/about" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
                            <li><Link to="/login" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>Login</Link></li>
                            <li><Link to="/register" className="nav-link" style={{ textDecoration: 'none', color: 'black' }}>Register</Link></li>
                        </>
                } 
            </ul>
        </section>
    )
}

export default Navbar;