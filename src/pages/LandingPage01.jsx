import React from "react";
import Mission from "../components/Mission";
import CallToAction from "../components/CallToAction";
import IndustrialCollaboration from "../components/IndustrialCollaboration";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/WhoWeAre";
import HeroSection from "../components/HeroSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function LandingPage01() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      {/* Hero Section */}
      <div id = "hero-section">
        <HeroSection />
      </div>
      
     
      {/*Who We Are?*/}
      <div id = "who-we-are">
        <WhoWeAre />
      </div>
      

      {/*What We Do?*/}
      
      <div id = "what-we-do">
        <WhatWeDo />
      </div>

      {/*Mission */}
      <div id = "mission">
        <Mission />
      </div>
     

      {/*Industrial Collaboration*/}
      <div id = "industrial-collaboration">
        <IndustrialCollaboration />
      </div>
      

      {/*Call To Action*/}
      <div id = "call-to-action">
        <CallToAction />
      </div>
      
    </>
  );
}
