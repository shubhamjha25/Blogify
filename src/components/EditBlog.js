import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import {useHistory} from 'react-router-dom'
import Loader from './Loader';

function EditBlog({match}) {

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
        date: '',
        id: ''
    });

    const [loadingTimeOver, setLoadingTimeOver] = useState(false);

    var isAuth = false;
    var token = localStorage.getItem('tokenStore');
    if(token)
        isAuth = true;
    else
        isAuth = false;

    const history = useHistory();

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
                });
            }
            setLoadingTimeOver(true);
        }
        getBlog();
    },[match.params.id])

    const onChangeInput = e => {
        const {name, value} = e.target;
        setBlog({...blog, [name]:value})
    }


    const editBlog = async e => {
        e.preventDefault()
        try {
            const token = localStorage.getItem('tokenStore')
            if(token){
                const {title, author, category, img, content, date, id} = blog;
                const newBlog = {
                    title, author, category, img, content, date
                }

                await axios.put(`https://obscure-shelf-45797.herokuapp.com/blogs/updateBlog/${id}`, newBlog, {
                    headers: {Authorization: token}
                });
                
                return history.push('/blogs')
            }
        } catch (err) {
            window.location.href = "/";
        }
    }

    return (
        <>
            <Navbar />
            {
                isAuth 
                    ?
                        loadingTimeOver
                            ?
                                <>
                                    <div className="create-blog-container">
                                        <h1>Editing {blog.title}</h1>

                                        <form onSubmit={editBlog}>
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
                                                <button className="blog-post" type="submit">Update</button>
                                            </div>
                                        </form>

                                    </div>
                                </>
                            :
                                <Loader /> 
                    :
                        <>
                            { history.push('/authError') }
                        </>
            }
        </>
    )
}

export default EditBlog;