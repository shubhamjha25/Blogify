import React from 'react';
import './Front.css';
import Logo from '../Blogify.PNG';

const Front = () => {
    return (
        <>
            <div className="bg-card-container">
                <div className="bg-card yellow">
                    <h2 className="bg-card-title">Fully Authenticated</h2>
                    <img src="https://image.flaticon.com/icons/png/512/102/102649.png" alt="bg-card-image" className="bg-card-img" />
                    <p className="bg-card-para">Because we care for your privacy.</p>
                </div>
                <div className="bg-card pink">
                    <h2 className="bg-card-title">Mobile Friendly</h2>
                    <img src="https://image.flaticon.com/icons/png/512/2013/2013614.png" alt="bg-card-image" className="bg-card-img" />
                    <p className="bg-card-para">For your better browsing experience.</p>
                </div>
                <div className="bg-card skyblue">
                    <h2 className="bg-card-title">Fast</h2>
                    <img src="https://cdn4.iconfinder.com/data/icons/business-vol-5/100/Artboard_16-512.png" alt="bg-card-image" className="bg-card-img" />
                    <p className="bg-card-para">Because <strong>time</strong> is precious.</p>
                </div>
            </div>
        </>
    );
}

export default Front;