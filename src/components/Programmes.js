import React from 'react';
import "../App.css";

import img10 from "../images/img10.jpg"
import img11 from "../images/img11.jpg"
import img12 from "../images/img12.jpg"
import Footer from "./Footer"
const Programmes = () => {
    return (
        <div>
            <section className="section " >
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-12 mb-4 text-center" >
                            <h3 className="main-heading">Programmes Offered At MVJCE</h3>
                            <br />
                            <p className="home-p">
                                MVJCE is ranked among the top 6 Engineering Colleges for
                                Academic Performance in UG under Visvesvaraya Technological
                                University. We have campus learning centres set up in
                                collaboration with companies such as National Instruments and
                                Infosys. We strive for excellence at all levels of student’s
                                academic life from the day they set foot on campus. The courses
                                range from Aeronautical Engineering to Mechanical Engineering
                                and Chemical Engineering. Our state-of-the-art infrastructure
                                ensures a dynamic learning environment for students. If you aspire
                                to pursue outstanding Engineering, MVJCE is a perfect choice.
                            </p>
                        </div >
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={img10} className="w-100 border-bottom" style={{ height: 275 }} alt="services" />
                                <div className="card-body">
                                    <h2>School Of<br />
                                        Computer Science</h2>
                                    <p>
                                        MVJCE provides innovative emerging programs in Computer Science and Engineering
                                        to bring out future ready engineers. Explore our highly competitive engineering
                                        programs that are approved by the AICTE and affiliated to VTU!
                                    </p>
                                    <ul>
                                        <li>Artificial Intelligence & Machine Learning</li>
                                        <li>Computer Science and Design</li>
                                        <li>Computer Science Engineering</li>
                                        <li>Computer Science Engineering(Data Science)</li>
                                        <li>Information Science & Engineering</li>
                                        <li>M Tech - Computer Science & Engineering</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={img11} className="w-100 border-bottom" style={{ height: 275 }} alt="services" />
                                <div className="card-body">
                                    <h2>School Of<br />
                                        Electrical Science</h2>
                                    <p>
                                        MVJCE is one of the top electrical and electronics engineering
                                        colleges in Bangalore, providing students with an unmatched
                                        learning experience. If you are interested in electrical systems
                                        and electrical engineering, then you are at the right place.
                                    </p>
                                    <ul>
                                        <li>Electrical & Electronics Engineering</li>
                                        <li>Electronics & Communication Engineering</li>
                                        <li>Industrial IOT</li>
                                        <br />
                                        <br />
                                        <br />
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={img12} className="w-100 border-bottom" style={{ height: 275 }} alt="services" />
                                <div className="card-body">
                                    <h2>School Of<br />
                                        Mechanical Science</h2>
                                    <p>
                                        At MVJCE, we offer extensive opportunities for students to thrive and make a difference through engineering. The students receive unsurpassed knowledge from our skilled faculty.
                                    </p>
                                    <ul>
                                        <li>Aeronautical engineering</li>
                                        <li>Aero Space Engineering</li>
                                        <li>Chemical Engineering</li>
                                        <li>Civil Engineering</li>
                                        <li>Mechanical Engineering</li>
                                    </ul>
                                    <br />
                                    <br />
                                </div>
                            </div>

                        </div>

                    </div >
                </div >

            </section >
            <Footer />
        </div>
    );
};

export default Programmes;
