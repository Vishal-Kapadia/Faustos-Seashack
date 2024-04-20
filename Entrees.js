import React from 'react';
import { Container } from 'react-bootstrap';

const EntreesSection = () => {
  return (
    <section className="bg-success text-light p-5 text-center">
      <Container>
        <div className="d-sm-flex align-items-center justify-content-center">
          <div className="text-center"> {/* Added text-center class */}
            <h1>
              Entrees <span className="text-light">Menu</span>
            </h1>
            <p className="lead">
              Our entrees are all fantastic. Order Vegan or non-Vegan.
            </p>
          </div>
          <img className="img-fluid w-50" src="img/showcase.svg" alt="" />
        </div>
      </Container>
    </section>
  );
};

export default EntreesSection;
