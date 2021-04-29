import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './AllBlogs.css';
import { Link } from 'react-router-dom';

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token)
        isAuth = true;
    else
        isAuth = false;

    const getBlogs = async () => {
        const res = await axios.get('https://obscure-shelf-45797.herokuapp.com/blogs/getAll');
        setBlogs(res.data);
    }

    useEffect(() => {
            getBlogs();
    }, []);

    return (
        <>
            <h1>Have Some Leisure Time? Give a Read Below.</h1>
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
                                    <button className="read-more-btn">
                                        {
                                            isAuth ? 
                                            <Link to={`blogs/${blog._id}`} style={{textDecoration: "none", color: "black"}}>
                                                Read More
                                            </Link>
                                            :
                                            <Link to="/authError" style={{textDecoration: "none", color: "black"}}>
                                                Read More
                                            </Link>   

                                        }
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default AllBlogs;