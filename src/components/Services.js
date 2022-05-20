import React from 'react';
import "../App.css";
import service1 from "../images/img1.jpg";
import service2 from "../images/img.jpg";
import service3 from "../images/img5.jpg";
const Services = () => {
    return (
        <section className="section " >
            <div className="container" >
                <div className="row" >
                    <div className="col-md-12 mb-4 text-center" >
                        <h3 className="main-heading">Services</h3>
                    </div >
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={service1} className="w-100 border-bottom" style={{ height: 275 }} alt="services" />
                            <div className="card-body">
                                <h6>service 1</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={service2} className="w-100 border-bottom" style={{ height: 275 }} alt="services" />
                            <div className="card-body">
                                <h6>service 2</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={service3} className="w-100 border-bottom" style={{ height: 275 }} alt="services" />
                            <div className="card-body">
                                <h6>service 3</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>

                    </div>

                </div >
            </div >
        </section >
    );
};

export default Services;
