import React, {useState} from 'react';
import Navbar from './Navbar';
import './Login.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [err, setErr] = useState('');

    const history = useHistory();

    const onChangeInput = e => {
        const { name, value } = e.target;
        setUser({...user, [name]:value});
        setErr('');
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            const res = await axios.post('https://obscure-shelf-45797.herokuapp.com/users/signin',{
                email: user.email,
                password: user.password
            });
            setUser({name: '', email: '', password: ''});
            localStorage.setItem('tokenStore', res.data);
            return history.push('/home');
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }

    return (
        <>
            <Navbar />

            <hgroup>
                <h2>Welcome back!</h2>
                <p>Please enter your details to sign into your account</p>
            </hgroup>

            <form onSubmit={loginSubmit} method="post" className = "log-form">
                <div className="group log-input">
                    <input type="email" id = "email" name = "email" placeholder = "E-Mail" required value={user.email} onChange={onChangeInput} />
                </div>

                <div className="group log-input">
                    <input type="password" id = "password" name = "password"  placeholder = "Password" required value={user.password} autoComplete="true" onChange={onChangeInput} />
                </div>

                <br /><br />

                <div className="container-log-btn">
                    <button type="submit" name = "btn_submit" className="log-form-btn">
                    <span>Login</span>
                    </button>
                </div>
            </form>
        </>
    );
}

export default Login;