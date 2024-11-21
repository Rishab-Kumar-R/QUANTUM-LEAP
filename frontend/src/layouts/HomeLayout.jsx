import { Outlet, useLocation } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white antialiased flex flex-col">
      <Navigation />
      {location.pathname === '/' && <Hero />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
