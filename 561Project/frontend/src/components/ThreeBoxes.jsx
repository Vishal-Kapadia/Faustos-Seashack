import React from 'react';

const ThreeBoxes = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 border-warning">
              <div className="card-body text-center">
                <h2 className="card-title text-warning mb-4">Daily Discounts</h2>
                <ul className="list-unstyled">
                  <li>Fire Wings - 10% off!</li>
                  <li>Vishal's Special Spaghetti - 15% off!</li>
                  <li>THE Burrito - 15% off!</li>
                </ul>                
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-warning">
              <div className="card-body text-center">
                <h2 className="card-title text-warning mb-4">Promotional Items</h2>
                <ul className="list-unstyled">
                  <li>The delicious Clam Chowder, found in Specialties!</li>
                  <li>The one, the only, for a limited time... Nick's GOATED burger in Entrees!</li>
                  <li>The Iberian Paella is here only for this summer! Don't miss out in Deals!</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-warning">
              <div className="card-body text-center">
                <h2 className="card-title text-warning mb-4">Hours of Operation</h2>
                <ul className="list-unstyled">
                  <li>Monday thru Thursday: 9AM to 8PM</li>
                  <li>Friday thru Saturday: 9AM to 10PM</li>
                  <li>Sunday: <span className="text-warning">CLOSED</span></li>
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


