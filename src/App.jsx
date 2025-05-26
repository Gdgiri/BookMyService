import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Pages/HeroSection";
import AboutUs from "./Pages/AboutUs";
import ServicesSection from "./Pages/ServiceSection";
import ContactForm from "./Pages/ContactForm";
import SupportCards from "./Pages/SupportCards";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import BookingList from "./Pages/BookingList";
import Login from "./Pages/Login";

const App = () => {
  const location = useLocation();

  const isAdminPage =
    location.pathname === "/admin" || location.pathname === "/login";

  return (
    <div>
      {/* ✅ Only show homepage content on '/' */}
      {!isAdminPage && (
        <>
          <Navbar />
          <HeroSection />
          <AboutUs />
          <ServicesSection />
          <ContactForm />
          <SupportCards />
          <Footer />
        </>
      )}

      {/* ✅ Only show admin content on '/admin' */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <div className="flex min-h-screen flex-col md:flex-row">
              <Nav />
              <div className="flex-1 overflow-auto">
                <BookingList />
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
