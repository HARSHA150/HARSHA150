import React from 'react';
import '../../styles/hero.css';
import Img from '../../assets/img/hero_image.png';

const HeroSection = () => {
  const learnMoreLink = 'https://example.com/learn-more'; 

  return (
    <section id="home">
      <div className="hero-container">
        <div className="content">
          <p data-aos="fade-up" data-aos-duration="2000">
            OUR GYMNASIUM<br />
            Our gym is more than just a place to work out; it's a sanctuary where individuals embark
            on transformative journeys. Nestled in the heart of the city, its modern facilities cater
            to every fitness need, from high-intensity training to mindful yoga sessions. The vibrant
            energy of like-minded individuals fuels motivation, creating a supportive community that
            celebrates achievements big and small. Experienced trainers provide personalized guidance,
            empowering members to reach their full potential and surpass their fitness goals. Beyond
            physical transformation, the gym cultivates mental resilience and fosters a sense of
            belonging. Whether it's sweating it out on the treadmill or bonding over post-workout
            smoothies, every visit leaves a lasting impression. It's not just a gym; it's a lifestyle,
            a home away from home where dedication meets fulfillment, and where dreams of a healthier,
            stronger self become reality. In its vibrant ambiance, camaraderie thrives, creating
            lasting connections and memories that extend far beyond the gym's walls.
          </p>
          <a
            href={learnMoreLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="learn-more-btn">Learn More</button>
          </a>
        </div>
        <div className="image-container" data-aos="fade-left" data-aos-duration="2000">
          <div className="image-background" />
          <img src={Img} alt="Gymnasium" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
