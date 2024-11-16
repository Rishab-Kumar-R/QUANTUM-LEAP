// src/LandingPage/LandingPage.jsx
import React from "react";
import NavBar from "./NavBar";
import FeaturesSection from "./FeaturesSection";
import WorkingsSection from "./WorkingsSection";
import AboutSection from "./AboutSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <section>
        <HeroSection id="home" />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>
      <section id="workflow">
        <WorkingsSection />
      </section>

      <FooterSection />
    </div>
  );
}

export default LandingPage;
