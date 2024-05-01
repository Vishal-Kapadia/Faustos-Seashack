import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-4">About Us</h2>
            <p>For the past 15 years, we have provided reliable seafood options for the community, doing so with the most elite ingredients. The customer has been and will continue to be our priority, which has been ingrained since the day we founded the restaurant. We continue to expand our cuisine, which is located in Shellside, California, in front of a beautiful ocean view!</p>
            <p></p>
          </div>
          <div className="col-lg-6">
            <img src="https://www.foodandwine.com/thmb/x5Xd9vyWwaPochuUbAU3typL8RM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-seafood-boil-with-cajun-seasoning-hero-02-e202a099e35a4cd2b00aadb486eed146.jpg" alt="About Us Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
