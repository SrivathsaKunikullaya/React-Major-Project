import React from 'react';
import "../App.css"
import { Link } from "react-router-dom"
import Vision from './Vision';
import Slider from './Slider'
import Footer from './Footer'
const Home = () => {
    return (
        <div>
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Welcome to MVJ College of Engineering</h3>
                            <div className="underline mx-auto"></div>
                            <br />
                            <p className="home-p">
                                4 decades of Excellence in Engineering Education.
                                MVJCE has state-of-the-art infrastructure, creating
                                an environment for progressive learning and development.
                                With around 23,500 people graduating till date, MVJ has
                                become a preferred college for students aspiring to pursue
                                their Engineering and Management degrees.
                            </p>
                            <Link to="/About" className="btn btn-info">Read more</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Vision />
            <Footer />
        </div>
    );
};

export default Home;
