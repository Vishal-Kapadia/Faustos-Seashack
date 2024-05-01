import React from 'react';
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';
import NavbarGo from '../components/Navbar'
import AddToCart from '../components/AddToCart';


const FaustosSeashack = () => {
  return (
    <>
      <NavbarGo />
      <section className="bg-dark text-primary p-4 text-center">
        <Container>
          <h1>
            Check out our <span className="text-warning">Specialty Items!</span>
          </h1>
          <h4>These are our most prized meals that customers absolutely can't get enough of!</h4>
        </Container>
      </section>

      {/* Specialty Items */}
      <section className="p-4">
        <Container fluid>
          <div className="row text-center">
            <div className="col-md">
              <Card bg="info" text="dark">
                <Card.Body>
                  <Card.Title className="mb-3 text-center">Calamari</Card.Title>
                  <Card.Text>
                    A fried squid served with butter, garlic, and cilantro. Price TBD
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md">
              <Card bg="info" text="dark">
                <Card.Body>
                  <Card.Title className="mb-3 text-center">Fish N' Chips</Card.Title>
                  <Card.Text>
                    A classic British delicacy of fried fish sticks with tartar sauce. Price TBD
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md">
              <Card bg="info" text="dark">
                <Card.Body>
                  <Card.Title className="mb-3 text-center">Clam Chowder</Card.Title>
                  <Card.Text>
                    A soup served in a bread bowl with potato, chicken, and creamy cheese broth. Price TBD
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </section>

    <AddToCart />

    </>
  );
};

export default FaustosSeashack;
