import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const EntreesSection = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [addedToCart, setAddedToCart] = useState({}); // Use an object to track added items

    useEffect(() => {
        fetchFoodItems();
        loadCartFromStorage(); // Load cart from localStorage on component mount
    }, []);

    const fetchFoodItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/api/fooditems/');
            setFoodItems(response.data);
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
    };

    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        setAddedToCart({ ...addedToCart, [item.id]: true }); // Update addedToCart object
        saveCartToStorage(updatedCart); // Save updated cart to localStorage
        setTimeout(() => setAddedToCart({ ...addedToCart, [item.id]: false }), 3000);
    };

    const saveCartToStorage = (cartData) => {
        localStorage.setItem('cart', JSON.stringify(cartData));
    };

    const loadCartFromStorage = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    };

    return (
        <>
            <section className="p-5">
                <Container>
                    <Row className="text-center">
                        {foodItems.map(item => (
                            <Col key={item.id} lg={3} className="mb-3">
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <img src={item.image} alt={item.name} style={{ maxWidth: '100%', height: 'auto' }} />
                                    <Button variant="success" onClick={() => addToCart(item)}>Add to Cart</Button>
                                    {addedToCart[item.id] && <p>Added to cart</p>}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default EntreesSection;
