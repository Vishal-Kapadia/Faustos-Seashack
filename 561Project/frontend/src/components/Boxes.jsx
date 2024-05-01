import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const EntreesSection = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        fetchFoodItems();
    }, []);
    <h>TESTING</h> 
    const fetchFoodItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/api/fooditems/');
            setFoodItems(response.data);
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
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
                                    <button className="btn btn-success">{item.price}</button>
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
