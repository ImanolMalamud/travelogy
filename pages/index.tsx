"use client";

import MobileNavbar from "@/components/helper/MobileNavbar";
import Navbar from "@/components/helper/Navbar";
import React, { useState } from "react";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className="overflow-x-hidden">
      <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <MobileNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      {/* <Hero /> */}
    </div>
  );
}

export default HomePage;
