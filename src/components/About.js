import React from "react";
import "../App.css";
import img1 from "../images/img9.jpg"
import Footer from "./Footer"
const About = () => {
    return (
        <div>
            <section className="py-4 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h3 className="main-heading">About Us</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">

                    <h4 className="main-heading">Srivathsa Kunikullaya H</h4>
                    <img src={img1} class="rounded float-end shadow " alt="..." />
                    <p className="home-p">
                        MVJ College of Engineering was established in 1982
                        as the flagship institution of the Venkatesha Education
                        Society to impart education in engineering, management,
                        and beyond. MVJCE’s 15-acre campus in Whitefield,
                        Bangalore, bears state-of-the-art infrastructure that
                        creates an environment for progressive learning and development.</p>
                    <p className="home-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque eros ex, sollicitudin ut odio quis, laoreet
                        sodales sem. Nunc maximus a diam vitae aliquet. Etiam vel
                        ipsum id libero iaculis eleifend at et sapien. Pellentesque
                        cursus lacus augue, et fermentum diam fermentum at. Vivamus
                        sapien magna, aliquet sit amet feugiat sit amet, eleifend
                        et nisl. Ut molestie vehicula sapien luctus pulvinar.
                        Nullam dictum scelerisque sem, sit amet pellentesque
                        libero luctus et. Proin hendrerit sollicitudin orci.
                        Nam ac purus rutrum sapien euismod pretium non sed
                        lectus. Nunc sodales dictum volutpat. In bibendum
                        urna neque, vel tincidunt quam laoreet in.
                        Pellentesque ac magna congue, varius erat non,
                        consectetur ligula. Phasellus feugiat lorem et tortor
                        finibus bibendum. Pellentesque non est finibus est
                        aliquet malesuada non et neque. Sed eget convallis turpis.
                        Duis tincidunt nunc egestas turpis hendrerit, congue eleifend
                        velit tempor. Duis id augue at nisi semper posuere. Class
                        aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Sed nec felis vel tellus condimentum
                        luctus ut eget urna. Donec ultricies iaculis tortor sit amet
                        dapibus. Vestibulum quis pulvinar purus, eget consequat ex.
                        Mauris eu fermentum eros, ac suscipit lacus.
                        Donec sed ipsum eget enim sollicitudin vestibulum.
                        Vivamus sodales ex sit amet quam scelerisque,
                        in viverra risus lobortis. Proin semper orci in felis
                        luctus commodo. Quisque posuere arcu sit amet auctor semper.
                        Suspendisse ultrices placerat lorem, sed blandit enim lobortis a.
                        Donec non ante vitae tellus ultrices cursus. Quisque venenatis
                        eu erat vel facilisis. Nulla id urna dolor.
                    </p>
                </div>
            </section >
            <Footer />
        </div>
    );
};

export default About;
