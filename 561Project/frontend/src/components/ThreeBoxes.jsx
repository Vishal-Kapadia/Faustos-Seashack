import React from 'react';
import { Container } from 'react-bootstrap';

const ThreeBoxes = () => {
  return (
    <section className="p-4">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md">
            <div className="card bg-light text-dark pb-2">
              <div className="card-body text-center">
                <h1 className="card-title mb-3 text-warning">Daily Discounts</h1>
                <p className="card-text">
                  <ul className="text-dark text-wrap">
                    <li className="pb-4">Fire Wings 10% off!</li>
                    <li className="pb-4">Vishal's Special Spaghetti 15% off!</li>
                    <li className="mb-2">THE Burrito 15% off!</li>
                  </ul>                
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-light text-dark pb-2">
              <div className="card-body text-center">
                <h1 className="card-title mb-3 text-warning text-wrap">Promotional Items</h1>
                <p className="card-text">
                  <ul className="text-dark text-wrap">
                    <li className="pb-4">The delicious Clam Chowder, found in Specialties!</li>
                    <li className="pb-4">The one, the only, for a limited time... Nick's GOATED burger in Entrees!</li>
                    <li className="mb-2">The Iberian Paella is here only for this summer! Don't miss out in Deals!</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-light text-dark pb-2">
              <div className="card-body text-center">
                <h1 className="card-title mb-3 text-warning">Hours of Operation</h1>
                <p className="card-text">
                  <ul className="text-dark text-wrap">
                    <li className="pb-4">Monday thru Thursday: 9AM to 8PM</li>
                    <li className="pb-4">Friday thru Saturday: 9AM to 10PM</li>
                    <li className="mb-2">Sunday: <span className="text-warning">CLOSED</span></li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeBoxes;
