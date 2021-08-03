import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Register = () => {

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

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            const res = await axios.post('https://obscure-shelf-45797.herokuapp.com/users/signup',{
                email: user.email,
                password: user.password
            });
            setUser({name: '', email: '', password: ''});
            return history.push('/login');
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }

    return (
        <>
            <Navbar />
            <hgroup>
                <h2>Welcome to <strong>Blogify</strong>!</h2>
                <p>First things first. Lets create a new account and get started</p>
            </hgroup>

            <form onSubmit={registerSubmit} method="post" className = "log-form">
                <div className="group log-input">
                    <input type="email" id = "email" name = "email" placeholder = "E-Mail" required value={user.email} onChange={onChangeInput} required />
                </div>

                <div className="group log-input">
                    <input type="password" id = "password" name = "password"  placeholder = "Password" required value={user.password} onChange={onChangeInput} autoComplete="true" />
                </div>

                <div className="container-log-btn">
                    <button type="submit" name = "btn_submit" className="log-form-btn">
                    <span>REGISTER</span>
                    </button>
                </div>
            </form>
        </>
    );
}

export default Register;