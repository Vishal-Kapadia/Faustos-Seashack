import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  return (
    <Col md className="my-2">
      <Card className="bg-dark text-light">
        <Card.Body className="text-center">
          <NavLink to="/mycart" className="nav-link">
            Cart
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cart;
