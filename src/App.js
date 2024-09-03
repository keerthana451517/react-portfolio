// src/App.js
import React from 'react';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './Styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Landing />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
