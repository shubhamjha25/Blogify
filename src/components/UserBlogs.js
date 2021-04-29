import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import './AllBlogs.css'

const UserBlogs = () => {

    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token)
        isAuth = true;
    else
        isAuth = false;

    if(isAuth == true)
    {
        var decoded = jwt_decode(token);
        var userID = decoded.id;
    }

    var history = useHistory();

    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        const res = await axios.get('https://obscure-shelf-45797.herokuapp.com/blogs/getBlogs',
            {headers: {Authorization: token}}, 
            {user_id: userID}
            );
        console.log(res.data);
        setBlogs(res.data);
    }

    useEffect(() => {
            getBlogs();
    }, []);

    return (
        <>
            <Navbar />
            {
                isAuth 
                    ?
                        <>
                            <h1>Here's What You Have Written!</h1>
                            <div className="blog-card-container">
                                {
                                    blogs.map(blog => (
                                        <div className="blog-card">
                                            <div className="blog-card-left">
                                                <img src={blog.img} alt="Blog-Image" />
                                            </div>
                                            <div className="blog-card-right">
                                                <div className="blog-info">
                                                    <h2>{blog.title}</h2>
                                                    <h5><span className="blog-category">{blog.category}</span></h5>
                                                </div>
                                                <h4 className="blog-author">Author : {blog.author}</h4>
                                                <div className="blog-content">
                                                    <p className="blog-content-desc">{blog.content}</p>
                                                </div>
                                                <div className="read-more-btn-holder">
                                                    <button className="read-more-btn">Read More</button>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    :
                        <>
                            {
                                history.push('/authError')
                            }
                        </>
            }
        </>
    );
}

export default UserBlogs;