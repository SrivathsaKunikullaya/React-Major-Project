import React from 'react';
import Footer from "./Footer"
const Contact = () => {
    return (
        <div>
            <section className="py-4 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4 className="main-heading">Contact Us</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section " >
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-md-6 border-end">
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <div className="form-group">
                                        <label claaName="mb-1">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label claaName="mb-1">Phone Number</label>
                                        <input type="tel" className="form-control" placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="form-group">
                                        <label claaName="mb-1">Email Address</label>
                                        <input type="email" className="form-control" placeholder="Enter Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <label claaName="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Type your message"></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="button" className="btn btn-primary shadow w-100">Send message</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h5>Address Information</h5>
                                    <p>
                                        MVJCE , Channasandra , Bengaluru Karnataka -560066 , INDIA
                                    </p>
                                    <p>
                                        Phone : +91 9741843734
                                    </p>
                                    <p>
                                        Email : harinarayana324@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
