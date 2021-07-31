import React from 'react';
import Navbar from './Navbar';
import Logo from '../Blogify.PNG';

const developers = 
    [
        {
            name: "Shubham Jha",
            img: "https://shubhamjha25.github.io/static/media/shubhamjha.9ec32281.jpg",
            education: "B.TECH CSE'23 @ BPPIMT",
            title: "Full Stack Web & Mobile Applications Developer | Machine Learning Enthusiast",
            role: "Frontend",
            website: "https://shubhamjha25.github.io",
            github: "https://github.com/shubhamjha25",
            linkedin: "https://www.linkedin.com/in/shubham-jha-252001/"
        },
        {
            name: "Soham Das",
            img: "https://portfolio-cbdfe.firebaseapp.com/static/media/about.a974e571.jpeg",
            education: "B.TECH CSE'23 @ BPPIMT",
            title: "Full Stack Web Developer | Mobile Apps with React Native | Blockchain Evangelist",
            role: "Backend",
            website: "https://portfolio-cbdfe.firebaseapp.com/",
            github: "https://github.com/Soham2020",
            linkedin: "https://www.linkedin.com/in/soham-das-2a0467190/"
        }
    ];

const DevCard = () => {
    return (
        <>
            <div className="blog-card-container">
                {
                    developers.map(dev => (
                        <div className="blog-card">
                            <div className="blog-card-left">
                                <img className="dev-pic" src={dev.img} alt="Blog-Image" />
                            </div>
                            <div className="blog-card-right">
                                <div className="blog-info">
                                    <h2>{dev.name}</h2>
                                    <h5><span className="blog-category">{dev.role}</span></h5>
                                </div>
                                <h4 className="blog-author">{dev.title}</h4>
                                <div className="blog-content">
                                    <p className="blog-content-desc"><strong>Field of Study : </strong>{dev.education}</p>
                                </div>
                                <div className="read-more-btn-holder">
                                    <button className="read-more-btn">
                                        <a href={dev.linkedin} target="_blank" style={{textDecoration: 'none', color: 'black'}}>LinkedIn</a>
                                    </button>
                                    <button className="github-btn">
                                        <a href={dev.github} target="_blank" style={{textDecoration: 'none', color: 'white'}}>GitHub</a>
                                    </button>
                                    <button className="update-btn" >
                                        <a href={dev.website} target="_blank" style={{textDecoration: 'none', color: 'black'}}>Wesbite</a>     
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

const Paragraph = () => {
    return (
        <div>
            <h3>Blogify is a full-stack web application aimed to connect all the beautiful writers and the corresponding readers together at a single platform. </h3>
            <h3>The entire source code of the application, both client and server side are open-sourced at GitHub.</h3>
            <ul>
                <a href="https://github.com/shubhamjha25/Blogify" target="_blank" style={{textDecoration: 'none'}}><li>Blogify</li></a>
                <a href="https://github.com/Soham2020/BlogifyAPI" target="_blank" style={{textDecoration: 'none'}}><li>BlogifyAPI</li></a>
            </ul>
        </div>
    );
}

const About = () => {
    return (
        <>
            <Navbar />
            <h1>A Perfect Place for Readers & Writers ...</h1>
            <Paragraph />
            <h2>About the Developers</h2>
            <DevCard />
            <hr />
            <p style={{textAlign: 'center'}}>Copyright &copy; 2021 All Rights Reserved by <strong>Blogify.</strong></p>
        </>
    );
}

export default About;