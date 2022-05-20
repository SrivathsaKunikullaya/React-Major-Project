import React from 'react';
import "../App.css";
import product1 from "../images/img4.jpg";
import product2 from "../images/img2.jpg";
import product3 from "../images/img3.jpg";
const Products = () => {
    return (
        <section className="section " >
            <div className="container" >
                <div className="row" >
                    <div className="col-md-12 mb-4 text-center" >
                        <h3 className="main-heading">Products</h3>
                    </div >
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={product1} className="w-100 border-bottom" style={{ height: 275 }} alt="services" />
                            <div className="card-body">
                                <h6>Grocery</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={product2} className="w-100 border-bottom" style={{ height: 275 }} alt="services" />
                            <div className="card-body">
                                <h6>Electronics</h6>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={product3} className="w-100 border-bottom" style={{ height: 275 }} alt="services" />
                            <div className="card-body">
                                <h6>Cosmetics</h6>
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

export default Products;
