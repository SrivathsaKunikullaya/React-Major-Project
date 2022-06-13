import React from 'react';
import Footer from "../inc/Footer"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoToTop from '../inc/GoToTop'
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
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" required placeholder="Full Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="tel" required placeholder="Phone Number" />
                                            <Form.Text className="text-muted">
                                                We'll never share your phone number with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" required placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" required placeholder="Type your message" rows={3} />
                                        </Form.Group>
                                        <Button variant="primary" className="shadow w-100" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
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
            <GoToTop />
        </div>
    );
};

export default Contact;
