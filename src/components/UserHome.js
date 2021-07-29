import React, { useEffect, useState } from 'react';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios'
import './AllBlogs.css';
import Navbar from './Navbar';
import Loader from './Loader';

const UserHome = () => {

    const [blogs, setBlogs] = useState([]);
    const [loadingTimeOver, setLoadingTimeOver] = useState(false);

    const getBlogs = async () => {
        const res = await axios.get('https://obscure-shelf-45797.herokuapp.com/blogs/getAll');
        setBlogs(res.data);
        setLoadingTimeOver(true);
    }

    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token)
        isAuth = true;
    else
        isAuth = false;
    
    const history = useHistory()

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
                            <h1>Here's Everything For You To Read!</h1>
                            {
                                loadingTimeOver
                                    ?
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
                                                                <Link to={`blogs/${blog._id}`} style={{textDecoration: "none", color: "black"}} className="read-more-btn">
                                                                    Read More
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    :
                                        <Loader />
                            }
                        </> 
                    :
                        <>
                            {history.push('/authError')}
                        </>
            }
            
        </>
    );
}

export default UserHome;