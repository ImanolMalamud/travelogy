"use client";

import Hero from "@/components/Hero";
import Hotels from "@/components/Hotels";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import TopDestination from "@/components/TopDestination";
import React, { useState } from "react";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className="overflow-x-hidden">
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <MobileNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <Hero />
      <TopDestination />
      <Hotels />
      <Reviews />
    </div>
  );
}

export default HomePage;
