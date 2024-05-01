import React from 'react';
import NavBarGo from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import OurValues from '../components/OurValues';
import AddToCart from '../components/AddToCart.jsx';

const About = () => {
  return (
    <div>
      <NavBarGo />
      <AboutUs />
      <OurValues />
      <AddToCart />
    </div>
  );
};

export default About;


