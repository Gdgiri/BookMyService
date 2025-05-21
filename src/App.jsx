import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/HeroSection";
import ServicesSection from "./Pages/ServiceSection";
import ContactForm from "./Pages/ContactForm";
import SupportCards from "./Pages/SupportCards";
// import Testimonials from "./Pages/Testimonials";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <ContactForm />
      <SupportCards />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
