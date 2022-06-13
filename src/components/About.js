import React from "react";
import "../App.css";
import GoToTop from '../inc/GoToTop'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.png"
import Footer from "../inc/Footer"
import { Link } from "react-router-dom"
const About = () => {
    return (
        <div>
            <section className="py-4 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h1 className="main-heading">About MVJCE</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4">
                <div className="container">
                    <div className="card mt-4 cd">
                        <div className="card-body  cb">
                            <div className="row">
                                <div className="col-md-6 about-card order-md-1">

                                    <p className="home-p ">
                                        Should Education be Holistic? Should we Aim for
                                        an Intrinsic Reverence for Life and Passionate Love for Learning?
                                    </p>

                                </div>
                                <div className="col-md-6 order-md-2">

                                    <img src={img1} class="rounded float-end shadow img-fluid " style={{ height: 463 }} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">

                    <h3 className="main-heading">MVJ College Of Engineering</h3>
                    <p className="home-p">
                        MVJ College of Engineering was established in 1982
                        as the flagship institution of the Venkatesha Education
                        Society to impart education in engineering, management,
                        and beyond. MVJCE’s 15-acre campus in Whitefield,
                        Bangalore, bears state-of-the-art infrastructure that
                        creates an environment for progressive learning and development.</p>
                </div>
            </section >
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-1">
                            <img src={img2} class="rounded float-end shadow img-fluid " style={{ height: 435 }} alt="..." />
                        </div>
                        <div className="col-md-6 order-md-2">
                            <h3 className="main-heading">Admission Open for 2022</h3>
                            <p className="home-p">
                                With around 23,500 people graduating till date, MVJ has become
                                a preferred college for students aspiring to pursue their
                                Engineering and Management degrees.
                            </p>
                            <Link to="/Programmes" className="btn-cp"><span>Check Programmes</span></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <GoToTop />
        </div>
    );
};

export default About;
