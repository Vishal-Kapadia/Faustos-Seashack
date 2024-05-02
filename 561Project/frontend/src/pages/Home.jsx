import React from 'react';
import NavBarGo from '../components/Navbar';
import Banner from '../components/Banner';
import ThreeBoxes from '../components/ThreeBoxes';
import AddToCart from '../components/AddToCart';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBarGo />
      <Banner />
      <ThreeBoxes />
      <AddToCart />
      <Footer />
    </div>
  );
};

export default Home;

