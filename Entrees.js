import React from 'react';
import { Container } from 'react-bootstrap';

const EntreesSection = () => {
  return (
    <section className="bg-success text-light p-5">
      <Container>
        <div className="d-sm-flex align-items-center justify-content-center text-center">
          <div> 
            <h1>
              Entrees <span className="text-light">Menu</span>
            </h1>
            <p className="lead">
              Our Entrees Are All Fantastic. Order Vegan Or Non-Vegan.
            </p>
          </div>
          <img className="img-fluid w-50" src="https://th.bing.com/th/id/OIP.EMfqwNyLR4Jw0Y3UyEfsJQAAAA?rs=1&pid=ImgDetMain" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default EntreesSection;
