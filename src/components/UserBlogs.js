import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import './AllBlogs.css'
import Loader from './Loader';

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
    const [loadingTimeOver, setLoadingTimeOver] = useState(false);

    const getBlogs = async () => {
        const res = await axios.get('https://obscure-shelf-45797.herokuapp.com/blogs/getBlogs',
            {headers: {Authorization: token}}, 
            {user_id: userID}
            );
        console.log(res.data);
        setBlogs(res.data);
        setLoadingTimeOver(true);
    }

    useEffect(() => {
            getBlogs();
    }, []);

    const deleteBlog = async (id) =>{
        try {
            if(token){
                await axios.delete(`https://obscure-shelf-45797.herokuapp.com/blogs/deleteBlog/${id}`, {
                    headers: {Authorization: token}
                });
                getBlogs();
            }
        } catch (error) {
            window.location.href = "/";
        }
    }

    return (
        <>
            <Navbar />
            {
                isAuth 
                    ?
                        <>
                            <h1>Here's What You Have Written!</h1>
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
                                                                <button className="read-more-btn">
                                                                    <Link to={`blogs/${blog._id}`} style={{textDecoration: "none", color: "black"}}>
                                                                        Read More
                                                                    </Link>
                                                                </button>
                                                                <button className="update-btn">
                                                                    <Link to={`edit/${blog._id}`} style={{textDecoration: "none", color: "black"}}>
                                                                        Update
                                                                    </Link>
                                                                </button>
                                                                <button className="delete-btn" onClick={() => deleteBlog(blog._id)}>
                                                                        Delete     
                                                                </button>
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
                            {
                                history.push('/authError')
                            }
                        </>
            }
        </>
    );
}

export default UserBlogs;