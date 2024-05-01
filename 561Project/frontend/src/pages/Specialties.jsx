import React, { useState, useEffect } from 'react';
import { Navbar, Container, Card, Button } from 'react-bootstrap';
import NavbarGo from '../components/Navbar';
import AddToCart from '../components/AddToCart';
import axios from 'axios';

const FaustosSeashack = () => {
  const [specialItems, setSpecialItems] = useState([]);

  useEffect(() => {
    fetchSpecialItems();
      }, []);
      <h>TESTING</h> 
        const fetchSpecialItems = async () => {
      try {
          const response = await axios.get('http://localhost:8000/api/api/specialitems/');
          setSpecialItems(response.data);
        } catch (error) {
      console.error('Error fetching Special items:', error);
        }
      };

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
            {specialItems.map((item) => (
              <div className="col-md" key={item.id}>
                <Card bg="info" text="dark">
                  <Card.Body>
                    <Card.Title className="mb-3 text-center">{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>Price: ${item.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <AddToCart />
    </>
  );
};

export default FaustosSeashack;
