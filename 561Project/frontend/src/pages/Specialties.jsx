import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import NavbarGo from '../components/Navbar';
import axios from 'axios';
import MyCart from './MyCart';
import AddToCart from '../components/AddToCart';
import Footer from '../components/Footer';

const FaustosSeashack = () => {
  const [specialItems, setSpecialItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState({}); // Use an object to track added items

  useEffect(() => {
    fetchSpecialItems();
    loadCartFromStorage(); // Load cart from localStorage on component mount
  }, []);

  const fetchSpecialItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/api/specialitems/');
      setSpecialItems(response.data);
    } catch (error) {
      console.error('Error fetching Special items:', error);
    }
  };

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    setAddedToCart({ ...addedToCart, [item.id]: true }); // Update addedToCart object
    saveCartToStorage(updatedCart); // Save updated cart to localStorage
    setTimeout(() => setAddedToCart({ ...addedToCart, [item.id]: false }), 3000);
  };

  const saveCartToStorage = (cartData) => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  };

  const loadCartFromStorage = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  };

  return (
    <>
      <Footer /> 
      <NavbarGo />
      <section className="bg-dark text-primary p-4 text-center">
        <Container>
          <h1>
            Check out our <span className="text-warning">Specialty Items!</span>
          </h1>
          <h4>These are our most prized meals that customers absolutely can't get enough of!</h4>
        </Container>
      </section>

      <section className="p-4">
        <Container fluid>
          <div className="row text-center">
            {specialItems.map((item) => (
              <div className="col-md" key={item.id}>
                <Card bg="info" text="dark">
                  <Card.Body>
                    <Card.Title className="mb-3 text-center">{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="success" onClick={() => addToCart(item)}>Add to Cart</Button>
                    {addedToCart[item.id] && <Alert variant="success" className="mt-3">Added to cart</Alert>}
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
