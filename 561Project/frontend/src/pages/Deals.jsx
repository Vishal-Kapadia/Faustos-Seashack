import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavBarGo from '../components/Navbar';
import AddToCart from '../components/AddToCart';
import Footer from '../components/Footer';

const DealsPage = () => {
    const [dealsItems, setDealsItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [addedToCart, setAddedToCart] = useState({}); // Use an object to track added items

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

    useEffect(() => {
        loadCartFromStorage(); // Load cart from localStorage on component mount
        fetch('http://localhost:8000/api/api/dealsitems/') // Update the URL as needed
            .then(response => response.json())
            .then(data => setDealsItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Footer/>
            <NavBarGo />
            <div className="container">
                <div className="bg-dark text-primary p-4 text-center"> {/* Added Bootstrap classes for styling */}
                    <h1 className="text-warning">Weekly deals!</h1>
                    <h4 className="text-light">These are our most prized meals that customers absolutely can't get enough of!</h4>
                </div>
            </div>

            {/* Render fetched data */}
            <div className="card bg-light text-dark mb-3 p-4">
                {dealsItems.map(item => (
                    <div key={item.id} className="card-body text-center">
                        <p className="font-weight-bold">{item.name}</p>
                        <p className="text-justify">{item.description}</p>
                        <button className="btn btn-success" onClick={() => addToCart(item)}>Add to Cart</button> {/* Add onClick handler */}
                    </div>
                ))}
            </div>

            <AddToCart />
        </div>
    );
}

export default DealsPage;
