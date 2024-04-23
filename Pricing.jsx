import React from 'react';
import '../../styles/pricing.css';

const Pricing = () => {
  const joinLink = 'https://example.com/join'; 

  return (
    <section id="Pricing">
      <div className="container">
        <div className="pricing_top">
          <h2 className="section_title" data-aos="zoom-in">
            Gym <span className="highlight">Pricing</span>
          </h2>
          <p>
            Empowerment, strength, and resilience fuel the journey toward personal growth and fulfillment.
          </p>
        </div>
        <div className="pricing_wrapper">
          <div className="pricing_item">
            <div className="pricing_card-top">
              <h2 className="section_title">Regular Member</h2>
              <h2 className="pricing section_title">
                ₹159<span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>4 classes per week</li>
              </ul>
              <a href={joinLink} target="_blank" rel="noopener noreferrer">
                <button className="register_btn">Join Now</button>
              </a>
            </div>
          </div>

          <div className="pricing_item">
            <div className="pricing_card-top">
              <h2 className="section_title">Premium Member</h2>
              <h2 className="pricing section_title">
                ₹399<span>/month</span>
              </h2>
            </div>
            <div class="services">
              <ul>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Standard options</li>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>4 classes per week</li>
              </ul>
              <a href={joinLink} target="_blank" rel="noopener noreferrer">
                <button className="register_btn">Join Now</button>
              </a>
            </div>
          </div>

          <div className="pricing_item">
            <div className="pricing_card-top">
              <h2 className="section_title">Standard Member</h2>
              <h2 className="pricing section_title">
                ₹699<span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li><span><i className="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the gym</li>
                <li><span><i className="ri-checkbox-blank-fill"></i></span>Customer support</li>
                <li><span><i className="ri-checkbox-blank-fill"></i></span>Personal trainer</li>
                <li><span><i className="ri-checkbox-blank-fill"></i></span>Standard options</li>
                <li><span><i className="ri-checkbox-blank-fill"></i></span>4 classes per week</li>
              </ul>
              <a href={joinLink} target="_blank" rel="noopener noreferrer">
                <button className="register_btn">Join Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
