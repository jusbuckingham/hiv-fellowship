import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ToolsSection from '../components/ToolsSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ToolsSection />
      <Footer />
    </>
  );
};

export default Home;
