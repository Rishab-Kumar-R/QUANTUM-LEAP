// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ImageChatRoom from "./ImageChatBoat/ImageChatRoom";
import NotFound from "./pages/NotFound";
import AboutSection from "./LandingPage/AboutSection";
import ContactUs from "./LandingPage/ContactUs";
import Documentation from "./LandingPage/Documentation";
import Plans from "./LandingPage/Plans";
import WorkingsSection from "./LandingPage/WorkingsSection";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/workflow" element={<WorkingsSection />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<ImageChatRoom />} />
        <Route path="*" element={<NotFound />} /> {/* 404 route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
