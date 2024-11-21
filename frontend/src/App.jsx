import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/util/ErrorBoundary';

const DemoSection = lazy(() => import('./components/DemoSection'));
const Features = lazy(() => import('./components/Features'));
// const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Services = lazy(() => import('./pages/Services'));

import Signup from './pages/SignUp';
import Login from './pages/Login';
import HomeLayout from './layouts/HomeLayout';
import NoNavLayout from './layouts/NoNavLayout';

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
                <Features />
                {/* <Pricing /> */}
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
      </Route>

      <Route element={<NoNavLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
