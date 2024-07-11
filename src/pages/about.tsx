import React from 'react';
import Navbar from '../components/Navbar';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">Information about the program...</p>
      </div>
    </>
  );
};

export default About;
