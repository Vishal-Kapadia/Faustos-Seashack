import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import NavbarGo from '../components/Navbar';

const MyCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Stored Cart:', storedCart); // Log stored cart for debugging
    setCart(storedCart);
  }, []);

  const handlePlaceOrder = () => {
    // Clear the cart and update localStorage
    setCart([]);
    localStorage.removeItem('cart');
  };

  const handleDeleteItem = (index) => {
    const updatedCart = cart.filter((item, idx) => idx !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage after item deletion
  };

  // Calculate total price of items in cart
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.price); // Convert price to float
    if (!Number.isNaN(itemPrice)) {
      return total + itemPrice;
    } else {
      console.error('Invalid price found in cart:', item.price);
      return total; // Ignore invalid prices
    }
  }, 0);

  // Check if totalPrice is a valid number before formatting
  const formattedTotalPrice = Number.isNaN(totalPrice) ? '' : totalPrice.toFixed(2);

  console.log('Cart:', cart); // Log cart items for debugging
  console.log('Total Price:', formattedTotalPrice); // Log total price for debugging

  return (
    <>
      <NavbarGo />
      <Container className="mt-5">
        <h1>My Cart</h1>
        {cart && cart.length > 0 ? (
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Action</th> {/* Added Action column for delete button */}
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDeleteItem(index)}>Delete</Button> {/* Delete button */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p>Total Price: ${formattedTotalPrice}</p> {/* Display formatted total price */}
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Container>
      <section className="p-5">
        <Container>
          <div className="row text-center">
            <div className="col-md">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <i className="bi bi-cart-check-fill"></i>
                  <NavLink to="/thankyouorder">
                    <Button variant="primary" onClick={handlePlaceOrder}>Place Order</Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default MyCart;
