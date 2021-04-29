import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import './BlogView.css';

const BlogView = ({match}) => {

    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token)
        isAuth = true;
    else
        isAuth = false;

    var history = useHistory();

    const [blog, setBlog] = useState({
        title: '',
        author: '',
        img: '',
        category: '',
        content: '',
        date: ''
    })

    useEffect(() =>{
        const getBlog = async () =>{
            const token = localStorage.getItem('tokenStore')
            if(match.params.id){
                const res = await axios.get(`https://obscure-shelf-45797.herokuapp.com/blogs/getBlog/${match.params.id}`, {
                    headers: {Authorization: token}
                })
                setBlog({
                    title: res.data.title,
                    author: res.data.author,
                    img: res.data.img,
                    category: res.data.category,
                    content: res.data.content,
                    date: new Date(res.data.date).toLocaleDateString(),
                    id: res.data._id
                })
            }
            console.log(blog);
        }
        getBlog();
    },[match.params.id])

    return (
        <>
            <Navbar />
            {
                isAuth 
                    ?
                        <>
                            <div className="blog-view-container">
                                <div className="blog-view">
                                    <h1 className="blog-view-title">{blog.title}</h1>
                                    <img className="blog-view-image" src={blog.img} />
                                    <h2 className="blog-view-author">Written By : {blog.author}</h2>
                                    <p className="blog-view-content">{blog.content}</p>
                                    <h3>Last Updated on : {blog.date}</h3>
                                </div>
                            </div>
                        </>
                    :
                        <>
                            { history.push("/authError") }
                        </>
            }
        </>
    );
}

export default BlogView;