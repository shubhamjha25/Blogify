import React from 'react';
import LoggedIn from './LoggedIn';
import Navbar from './Navbar';

const UserBlogs = () => {

    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token)
        isAuth = true;
    else
        isAuth = false;

    return (
        <>
            <Navbar />
            {
                isAuth 
                    ?
                        <h1>User Blogs Page (Your Blogs ...)</h1>
                    :
                        <LoggedIn />
            }
        </>
    );
}

export default UserBlogs;