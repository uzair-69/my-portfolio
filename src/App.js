import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {HeroSection} from './components/heroSection';
import {Projects} from './components/Projects';
import { BuyerReview, SellerReview } from './components/Reviews';   
import Contacts from './components/Contact';  


function App() {
  return (

    <div className="App">
      
        <Header />
        <HeroSection />
        <Projects />
        <BuyerReview />
        <SellerReview />  
        <Contacts />
         <Footer />
    </div>

  );
}

export default App;
