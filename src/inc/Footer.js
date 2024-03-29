import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Footer = () => {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <h1>
                        Want to learn more about MVJCE?
                    </h1>
                    <br />
                    <br />
                    <div className="col-md-4">
                        <h6>ADDRESS</h6>
                        <p>
                            <FontAwesomeIcon icon="house" />

                            &nbsp;&nbsp;MVJ College of Engineering
                            <br />
                            Near ITPB, Whitefield
                            <br />
                            Bangalore-560 067</p>
                        <p><FontAwesomeIcon icon="location-dot" />
                            &nbsp;&nbsp;Get Direction
                            <br />
                            <br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.232942072273!2d77.75341912575121!3d12.984113853561553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e0ddee6891b%3A0xbde773e8a7f7189d!2sMVJ%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1654617347445!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </p>

                    </div>
                    <div className="col-md-4 text-center">
                        <h6>QUICK LINKS</h6>
                        <br />
                        <div><Link to="/">Home</Link></div><br />
                        <div><Link to="/services">Services</Link></div><br />
                        <div><Link to="/Products">Products</Link></div><br />
                        <div><Link to="/About">About</Link></div><br />
                        <div><Link to="/Contact">Contact</Link></div><br />
                    </div>
                    <div className="col-md-4">
                        <h6>GET IN TOUCH</h6>
                        <br />
                        <p>Board Line: +91 80 4299 1000</p>
                        <p>Email:helpdesk@mvjce.edu.in</p>
                        <p>Admissions: +91 80 4299 1003<br />
                            +91 80 4299 1040<br />
                            +91 80 4299 1090<br />
                            +91 8150 811 811</p>
                        <p>Email: contactmvjce@gmail.com</p>
                        <p>Reception: +91 80 4299 1000</p>
                        <p>Placement: +91 80 4299 1000</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer