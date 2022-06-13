import React from 'react'
import { Carousel } from 'react-bootstrap'
import slide1 from "../images/img7.jpg"
import slide2 from "../images/img6.jpg"
import slide3 from "../images/img8.jpg"
import "../App.css"
const slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={slide1}
                    style={{ height: 357 }}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Admission Open for 2022</h3>
                    <p >With around 23,500 people graduating till date,
                        MVJ has become a preferred college for students
                        aspiring to pursue their Engineering and Management degrees.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={slide2}
                    style={{ height: 357 }}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Scholarships</h3>
                    <p>Guiding thousands of students in shaping their future and becoming individuals of merit and knowledge.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-fluid"
                    src={slide3}
                    style={{ height: 357 }}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Careers</h3>
                    <p>MVJCE Employs more than 500 people at its campus
                        in whitefield of which approximately 260 are faculty
                        members and the rest are supporting staff</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default slider