import React from 'react';
import './App.css';
import Contact from './components/Contact';
import FirstSection from './components/FirstSection';
import Footer from './components/Footer';
import Header from './components/Header';
import SecondSection from './components/SecondSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection/>
      <SecondSection/>
      <Testimonials/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
