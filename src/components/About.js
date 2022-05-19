import React from "react";
import "../App.css";
const About = () => {
    return (
        <div>
            I<section className="py-4 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4 className="main-heading">About Us</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h5 className="main-heading">Srivathsa Kunikullaya H</h5>
                    <div className="underline"></div>
                    <p className="home-p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </section >
        </div>
    );
};

export default About;
