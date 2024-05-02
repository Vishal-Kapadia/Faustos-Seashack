import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const ItemsButtons = ({ foodItem, addToCart }) => {
    const handleClick = () => {
        addToCart(foodItem);
    };

    return (
        <Col lg>
            <Card size="md" className="bg-dark text-light" style={{ height: '100%' }}>
                <Card.Img variant="top" src={foodItem.image} size="sm" />
                <Card.Body className="text-center d-flex flex-column" style={{ height: '100%' }}>
                    <h5 className="mb-0">{foodItem.name}</h5> 
                    <p className="text-muted">{foodItem.description}</p> {/* Add a class for description styling */}
                    <div className="mt-auto">
                        <Button variant="primary" className="bg-danger" size="sm" onClick={handleClick}>Add to Cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemsButtons;
