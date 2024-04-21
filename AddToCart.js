import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const AddToCart = () => {
  return (
    <Col md className="my-2">
      <Card className="bg-dark text-light">
        <Card.Body className="text-center">
          <Button variant="primary">Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AddToCart;
