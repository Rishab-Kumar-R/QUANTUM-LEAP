import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/util/ErrorBoundary";

const DemoSection = lazy(() => import("./components/DemoSection"));
const ServicesCarousel = lazy(() => import("./components/ServicesCarousel"));
const Features = lazy(() => import("./components/Features"));
const FAQ = lazy(() => import("./components/FAQ"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Services = lazy(() => import("./pages/Services"));
const Documentation = lazy(() => import("./pages/Documentation"));

import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import ChatAI from "./pages/Chat/ChatAI";
import HomeLayout from "./layouts/HomeLayout";
import NoNavLayout from "./layouts/NoNavLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route
          index
          element={
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <DemoSection />
                <ServicesCarousel />
                <Features />
                <FAQ />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/about"
          element={
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <AboutUs />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/contact"
          element={
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <ContactUs />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/services"
          element={
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Services />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/docs"
          element={
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Documentation />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>

      <Route element={<NoNavLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatAI />} />
      </Route>

      <Route
        path="*"
        element={
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </Routes>
  );
};

export default App;
