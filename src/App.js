import React from 'react';
import './App.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Statistique from './Statistique/Statistique';
import Places from './Places/Places';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Statistique/>
      <Places/>
      <Footer/>
    </div>
  );
}

export default App;
