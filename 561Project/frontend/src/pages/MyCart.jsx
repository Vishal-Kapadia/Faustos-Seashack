import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import NavbarGo from '../components/Navbar'


const ShowcaseSection = () => {
    return (
        <section className="bg-dark text-light p-5 text-center">
            <div className="container">
                <h1>Your Order</h1>
                <p className="lead">List of items placed in cart</p>
                <img className="img-fluid w-50" src="img/showcase.svg" alt="" />
            </div>
        </section>
    );
};

const TaxesTotalSection = () => {
    return (
        <section className="p-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md">
                        <div className="card bg-dark text-light">
                            <div className="card-body text-center">Taxes and Total</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PlaceOrderSection = () => {
    return (
        <section className="p-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md">
                        <div className="card bg-dark text-light">
                            <div className="card-body text-center">
                                <i className="bi bi-cart-check-fill"></i>
                                <Button variant="primary">Place Order</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MapSection = () => {
    return (
        <section className="p-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md">
                        {/* Add map component here if needed */}
                    </div>
                </div>
            </div>
        </section>
    );
};

const MyCart = () => {
    return (
        <div>
            <NavbarGo />
            <ShowcaseSection />
            <TaxesTotalSection />
            <PlaceOrderSection />
            <MapSection />
        </div>
    );
};

export default MyCart;
