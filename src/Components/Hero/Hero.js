import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <img src="/airbnb_hero.jpg" alt="Hero Image" />
      <div className="hero-text">
        <h1>Explore the World</h1>
        <p>Find your dream stay.</p>
      </div>
    </section>
  );
}

export default Hero;