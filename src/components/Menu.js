import React from 'react';
import Navbar from './Navbar';
import Front from './Front';
import AllBlogs from './AllBlogs';

const HomePath = () => {
    return (
        <>
            <Front />
            <AllBlogs />
        </>
    );
}

const Menu = () => {
    return (
        <>
            <Navbar />
            <HomePath />
        </>
    );
}

export default Menu;