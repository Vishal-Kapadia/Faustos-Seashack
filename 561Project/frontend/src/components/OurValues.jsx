import React from 'react';
import { Card } from 'react-bootstrap';

const OurValues = () => {
  return (
    <section id="values" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="mb-4">Our Values</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Quality Ingredients</Card.Title>
                <Card.Text>We only serve the freshest, most locally-sourced ingredients to our customers!</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Sustainability</Card.Title>
                <Card.Text>We believe in keeping mother nature as beautiful as possible, so we do not endorse means that would damage it long-term!</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <Card.Title>Customer Satisfaction</Card.Title>
                <Card.Text>The customer is always our first priority!</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
