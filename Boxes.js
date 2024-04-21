import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import EntreeCard from './ItemsButtons';
import CartButton from './AddToCart';

const EntreesSection = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    //Possible add side effects here.
    console.log('Cart items updated:', cartItems);
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <>
      <section className="p-5">
        <Container>
          <Row className="text-center">
            <EntreeCard title="Vasual's Special Spaggetti" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" buttonSize="lg"/>
            <EntreeCard title="Large Salad" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" buttonSize="lg"/>
            <EntreeCard title="Fausto's Yummy Pizza" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" buttonSize="lg"/>
            <EntreeCard title="Sea Burritto" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" buttonSize="lg"/>
            <EntreeCard title="Nick's GOATed Burger" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" buttonSize="lg"/>
            <EntreeCard title="THE Burritto" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" buttonSize="lg"/>
            <EntreeCard title="Fire Wings" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" buttonSize="lg"/>
            <EntreeCard title="Chef's Mess" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" buttonSize="lg"/>

          </Row>
        </Container>
      </section>

      {/* Second section */}
      <section className="p-5">
        <Container>
          <Row className="text-center">
            <CartButton />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default EntreesSection;
