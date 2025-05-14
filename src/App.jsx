import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import background from "./assets/background2.jpg";

const App = () => {
  return (
    <div
      className="scroll-smooth bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      
           <Hero />
      
      
           <Pricing />
      

      <Footer />
    </div>
  );
};

export default App;
