import React from 'react';
import "../styles/ThreeBoxes.css";

const ThreeBoxes = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 border-warning">
              <div className="card-body text-center">
                <h2 className="card-title text-warning mb-4">Daily Discounts</h2>
                <ul className="list-unstyled custom-list">
                  <li className="mb-3">Fire Wings - 10% off!</li>
                  <li className="mb-3">Vishal's Special Spaghetti - 15% off!</li>
                  <li className="mb-3">THE Burrito - 15% off!</li>
                </ul>                
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-warning">
              <div className="card-body text-center">
                <h2 className="card-title text-warning mb-4">Promotional Items</h2>
                <ul className="list-unstyled custom-list">
                  <li className="mb-3">The delicious Clam Chowder, found in Specialties!</li>
                  <li className="mb-3">The one, the only, for a limited time... Nick's GOATED burger in Entrees!</li>
                  <li className="mb-3">The Iberian Paella is here only for this summer! Don't miss out in Deals!</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-warning">
              <div className="card-body text-center">
                <h2 className="card-title text-warning mb-4">Hours of Operation</h2>
                <ul className="list-unstyled custom-list">
                  <li className="mb-3">Monday thru Thursday: 9AM to 8PM</li>
                  <li className="mb-3">Friday thru Saturday: 9AM to 10PM</li>
                  <li className="mb-3">Sunday: <span className="text-warning">CLOSED</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeBoxes;


