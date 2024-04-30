import React, { useState, useEffect } from 'react';
import { Navbar, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import NavbarGo from '../components/Navbar';
import axios from 'axios'; // Import axios for API calls

const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetchCartItems(); // Fetch cart items when the component mounts
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('/api/cart/'); // Assuming the API endpoint for fetching cart items is '/api/cart/'
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const renderCartItems = () => {
        if (!Array.isArray(cartItems) || cartItems.length === 0) {
            return <p>Your cart is empty</p>;
        }
    
        return cartItems.map(item => (
            <Card key={item.id} className="my-3">
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Course: {item.course}</Card.Text>
                    <Card.Text>Price: ${item.price}</Card.Text>
                </Card.Body>
            </Card>
        ));
    };
    

    return (
        <div>
            <NavbarGo />
            <section className="bg-dark text-light p-5 text-center">
                <div className="container">
                    <h1>Your Cart</h1>
                    {cartItems.length > 0 ? (
                        renderCartItems()
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </section>
            <section className="p-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <i className="bi bi-cart-check-fill"></i>
                                    <NavLink to="/thankyouorder"> {/* Use NavLink for navigation */}
                                        <Button variant="primary">Place Order</Button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyCart;
