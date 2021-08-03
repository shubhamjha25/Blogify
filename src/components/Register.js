import React from 'react';
import Navbar from './Navbar';

const Register = () => {
    return (
        <>
            <Navbar />
            <hgroup>
                <h2>Welcome to <strong>Blogify</strong>!</h2>
                <p>First things first. Lets create a new account and get started</p>
            </hgroup>

            <form method="post" className = "log-form">
                <div className="group log-input">
                    <input type="email" id = "email" name = "email" placeholder = "E-Mail" required />
                </div>

                <div className="group log-input">
                    <input type="password" id = "password" name = "password"  placeholder = "Password" required autoComplete="true" />
                </div>

                <br /><br />

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