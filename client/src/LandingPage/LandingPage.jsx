// src/LandingPage/LandingPage.jsx
import React from "react";
import NavBar from "./NavBar";
import FeaturesSection from "./FeaturesSection";
import WorkingsSection from "./WorkingsSection";
import AboutSection from "./AboutSection";
import FooterSection from "./FooterSection";

function LandingPage() {
  return (
    <div>
      <NavBar />

      {/* Each section is identified by an ID for navigation */}

      <section id="workflow">
        <WorkingsSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <FooterSection />
    </div>
  );
}

export default LandingPage;
