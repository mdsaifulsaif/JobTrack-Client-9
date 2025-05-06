import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HiringBanner from "../Components/HiringBanner";
import CompaniesSection from "../Components/CompaniesSection";
import { useLoaderData } from "react-router";
import Jobs from "../Components/Jobs";
import Jobcard from "../Components/Jobcard";

function Home() {
  const companies = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <HiringBanner></HiringBanner>
        <CompaniesSection companies={companies}></CompaniesSection>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Home;
