import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const CreateBlog = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const [blog, setBlog] = useState({
        title: '',
        author: '',
        category: '',
        img: '',
        content: '',
        date: today
    });

    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token)
        isAuth = true;
    else
        isAuth = false;

    var history = useHistory();

    const onChangeInput = e => {
        const {name, value} = e.target;
        setBlog({...blog, [name]:value});
    }

    const createBlog = async e => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('tokenStore');
            if(token){
                const {title, author, category, img, content, date} = blog;
                const newBlog = {
                    title, author, category, img, content, date
                }

                await axios.post('https://obscure-shelf-45797.herokuapp.com/blogs/createBlogs', newBlog, {
                    headers: {Authorization: token}
                });
                
                return history.push('/blogs');
            }
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data);
            window.location.href = "/home";
        }
    }

    return (
        <>
            <Navbar />
            {
                isAuth 
                    ?
                        <>
                            <div className="create-blog-container">
                                <h1>Write a Blog</h1>

                                <form onSubmit={createBlog}>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="title">Blog Title</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="title" name="title" placeholder="Title of the Blog ..." required value={blog.title} onChange={onChangeInput} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="author">Author's Name</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="author" name="author" placeholder="Your name here ..." required value={blog.author} onChange={onChangeInput} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="category">Category</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="category" name="category" placeholder="The Field of The Blog (Tech, Healthcare etc ...)" required value={blog.category} onChange={onChangeInput} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="img">Image URL</label>
                                        </div>
                                        <div className="col-75">
                                            <input type="text" id="img" name="img" placeholder="Link of a relatable image for your blog" required value={blog.img} onChange={onChangeInput} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-25">
                                            <label htmlFor="content">Article</label>
                                        </div>
                                        <div className="col-75">
                                            <textarea id="content" name="content" placeholder="Write something.." style={{ height: "200px" }} required value={blog.content} onChange={onChangeInput}></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="blog-post" type="submit">POST</button>
                                    </div>
                                </form>

                            </div>
                        </> 
                    :
                        <>
                            { history.push('/authError') }
                        </>
            }
            
        </>
    );
}

export default CreateBlog;