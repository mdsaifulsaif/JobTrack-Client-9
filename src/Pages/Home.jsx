import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HiringBanner from "../Components/HiringBanner";
import CompaniesSection from "../Components/CompaniesSection";
import { useLoaderData } from "react-router";
import Jobs from "../Components/Jobs";

function Home() {
  const companies = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <Hero></Hero>
      <HiringBanner></HiringBanner>
      <CompaniesSection companies={companies}></CompaniesSection>
    </div>
  );
}

export default Home;
