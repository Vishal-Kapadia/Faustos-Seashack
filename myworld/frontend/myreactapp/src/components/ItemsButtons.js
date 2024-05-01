import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const ItemsButtons = ({ title, variant1, variant2, imageSrc}) => {
  return (
    <Col md>
      <Card className="bg-dark text-light" style={{ height: '100%' }}>
        <Card.Img variant="top" src={imageSrc} />
        <Card.Body className="text-center d-flex flex-column justify-content-between" style={{ height: '100%' }}>
          <div className="mb-3"> 
            <Button variant="primary" className={variant1} size="sm">{title}</Button>
          </div>
          <div>
            <Button variant="primary" className={variant2} size="md">{title}-Vegan</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemsButtons;
