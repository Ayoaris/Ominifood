import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Hero from './components/hero/hero';
import Meals from './components/meals/meals';
import Navbar from './components/nav/nav';
import Pricing from './components/Pricing/pricing';
import ImageSlider from './components/slider/slider';
import Slideimg from './components/slider/slide';
import Testimonial from './components/testimonial/testimonial';
import Workable from './components/Workable/workable';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Workable />
      <Meals />
      <ImageSlider />
      <Testimonial />
      <Pricing />
      <Form />
      <Footer />
    </>
  );
}

export default App;
