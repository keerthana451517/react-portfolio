// src/components/Landing.js
import React from 'react';
import Keer from './Assets/keer pic.jpg'; // Update path as necessary

const Landing = () => {
  return (
    <section id="landing">
      <img src={Keer} alt="Your Name" />
      <h1>Keerthana G</h1>
      <p>About Myself </p>
    </section>
  );
};

export default Landing;
