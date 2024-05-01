import React, { useState, useEffect } from 'react';
import { Container, Row , Col} from 'react-bootstrap';
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
            <Col lg={3} className="mb-3">
              <EntreeCard title="Vasual's Special Spaggetti" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/R.8819846faa49feeb3fc68857ce633471?rik=Z9Qmrhn0zwC7Jg&riu=http%3a%2f%2fc1.peakpx.com%2fwallpaper%2f888%2f140%2f44%2fspaghetti-sauce-pasta-food-wallpaper-preview.jpg&ehk=qaie2w385S%2bjOIcQNgJfUdmj%2forcILokNpKRL1u9fhI%3d&risl=&pid=ImgRaw&r=0" buttonSize="lg"/>
            </Col>  
            <Col lg={3}  className="mb-3">  
              <EntreeCard title="Large Salad" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/R.33b1ac7fb9e7d5132fadd355e6fbda46?rik=tYt7kOrwO%2f0ang&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f40000%2fvelka%2fshrimp-salad-1365691744Ksv.jpg&ehk=YrRHw5O4sK3uO5xbdlLD%2bH8sdNUmGn0hdx%2fXKsMrMhA%3d&risl=&pid=ImgRaw&r=0" buttonSize="lg"/>
            </Col>
            <Col lg={3}  className="mb-3">  
              <EntreeCard title="Fausto's Yummy Pizza" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.s4frVDDrnTXCX-4p9er64QHaE8?rs=1&pid=ImgDetMain" buttonSize="lg"/>
            </Col>
            <Col lg={3}  className="mb-3">
              <EntreeCard title="Sea Burritto" variant1="bg-danger" variant2="bg-success" imageSrc="https://c.pxhere.com/photos/f1/8e/burrito_gratin_nachos_gratin_food_mexican-557071.jpg!d" buttonSize="lg"/>
            </Col>
            <Col lg={3}  className="mb-3">
              <EntreeCard title="Nick's GOATed Burger" variant1="bg-danger" variant2="bg-success" imageSrc="https://c.pxhere.com/photos/38/70/burger_close_up_delicious_fast_food_food_photography_fresh_hamburger_junk_food-1556239.jpg!s" buttonSize="lg"/>
            </Col> 
            <Col lg={3}  className="mb-3">
              <EntreeCard title="THE Burritto" variant1="bg-danger" variant2="bg-success" imageSrc="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" buttonSize="lg"/>
            </Col>
            <Col lg={3}  className="mb-3">
              <EntreeCard title="Fire Wings" variant1="bg-danger" variant2="bg-success" imageSrc="https://www.publicdomainpictures.net/pictures/90000/velka/chicken-wings.jpg" buttonSize="lg"/>
            </Col>  
            <Col lg={3}  className="mb-3">
              <EntreeCard title="Chef's Mess" variant1="bg-danger" variant2="bg-success" imageSrc="https://images.pexels.com/photos/1671642/pexels-photo-1671642.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" buttonSize="lg"/>
            </Col>
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