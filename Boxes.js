import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const EntreesSection = () => {
  return (
    <>
      <section className="p-5">
        <Container>
          <Row className="text-center">
            <Col md>
              <Card className="bg-dark text-light">
                <Card.Body className="text-center">
                  <Button variant="primary" className="bg-danger">First Entree</Button>
                  <Button variant="primary" className="bg-success">First Entree-Vegan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-light">
                <Card.Body className="text-center">
                  <Button variant="primary" className="bg-danger">Second Entree</Button>
                  <Button variant="primary" className="bg-success">Second Entree-Vegan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-light">
                <Card.Body className="text-center">
                  <Button variant="primary" className="bg-danger">Third Entree</Button>
                  <Button variant="primary" className="bg-success">Third Entree-Vegan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-light">
                <Card.Body className="text-center">
                  <Button variant="primary" className="bg-danger">Fourth Entree</Button>
                  <Button variant="primary" className="bg-success">Fourth Entree-Vegan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-light">
                <Card.Body className="text-center">
                  <Button variant="primary" className="bg-danger">Fifth Entree</Button>
                  <Button variant="primary" className="bg-success">Fifth Entree-Vegan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-light">
                <Card.Body className="text-center">
                  <Button variant="primary" className="bg-danger">Sixth Entree</Button>
                  <Button variant="primary" className="bg-success">Sixth Entree-Vegan</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md>
              <Card className="bg-dark text-light">
                <Card.Body className="text-center">
                  <Button variant="primary" className="bg-danger">Seventh Entree</Button>
                  <Button variant="primary" className="bg-success">Seventh Entree-Vegan</Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Repeat the structure for the other entrees */}
            {/* ... */}
            <Col md>
              <Card className="bg-dark text-light">
                <Card.Body className="text-center">
                  <Button variant="primary" className="bg-danger">Eighth Entree</Button>
                  <Button variant="primary" className="bg-success">Eighth Entree-Vegan</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Second section */}
      <section className="p-5">
        <Container>
          <Row className="text-center">
            <Col md>
              <Card className="bg-dark text-light">
                <Card.Body className="text-center">
                  <Button variant="primary">Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EntreesSection;
