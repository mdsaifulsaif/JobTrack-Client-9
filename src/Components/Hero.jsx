// HeroSection.jsx
import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/banner1.png";
import HiringBanner from "./HiringBanner";
const Hero = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.to(bannerRef.current, {
      y: -20,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between  py-4 bg-white">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Your Fast-Track to Landing a{" "}
          <span className="text-blue-600">New Job</span> <br />
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We provide top-notch solutions to help you grow and succeed. Discover
          how we can elevate your business today.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
      <div className="md:w-2/5 mb-8 md:mb-0">
        <img
          ref={bannerRef}
          src={logo}
          alt="Hero"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
