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
                <Card.Body className="text-center d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                    <div className="mb-3">
                        <Button variant="primary" className="bg-danger" size="sm" onClick={handleClick}>{foodItem.name}</Button>
                    </div>
                    {/* Additional buttons or info */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ItemsButtons;
