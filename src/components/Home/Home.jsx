import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import PopularCategories from "./PopularCategories";
import PopularCompanies from "./PopularCompanies";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
      <section className="homePage page">
        <HeroSection />
        <HowItWorks />
        <PopularCategories />
        <PopularCompanies />
      </section>
      <Footer/>
    </>
  );
};

export default Home;